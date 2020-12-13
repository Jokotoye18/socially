"use strict";

const { Timestamp } = require("mongodb");

const os = require("os"),
  app = require("express")(),
  http = require("http").createServer(app),
  io = require("socket.io")(http),
  bcrypt = require("bcrypt"),
  toUint8Array = require("base64-to-uint8array"),
  collections = require("./mongo.config"),
  jwt = require("jsonwebtoken"),
  bodyParser = require("body-parser"),
  ifaces = os.networkInterfaces();
require("dotenv").config();
app.use(bodyParser.urlencoded({ extended: true }));

let ipAdrress;

for (let dev in ifaces) {
  ifaces[dev].forEach(function (details) {
    if (details.family === "IPv4" && details.address !== "127.0.0.1") {
      ipAdrress = details.address;
    }
  });
}

app.post("/login", async (req, res) => {
  let { usersCollection } = await collections;
  const { matric, password } = req.body;
  usersCollection
    .findOne({ matric: matric.toLowerCase() })
    .then((user, err) => {
      if (err) {
        res.send({ error: "An error occured, try later" });
        console.log(err);
      } else if (!user) {
        res.send({ error: "Invalid matric number" });
      } else {
        bcrypt.compare(password, user.password, (err, same) => {
          if (err) {
            res.send({ error: "An error occured, try later" });
          } else if (same) {
            let token = jwt.sign({ uid: user.uid }, process.env.secretKey, {
              expiresIn: "9999 years",
            });
            const { picture, ...rest } = user;
            res.send({
              token,
              user: {
                picture: toUint8Array(picture.split("base64,")[1]),
                ...rest,
              },
            });
          } else {
            res.send({ error: "Incorrect password" });
          }
        });
      }
    });
});

app.get("/searchUsers", async (req, res) => {
  let { usersCollection } = await collections;
  const { searchField, searchKeyword } = req.query;
  let query = {};
  query[searchField] = {
    $regex: new RegExp(`^(.*${searchKeyword}.*)`, "i"),
  };
  usersCollection
    .find(query)
    .toArray()
    .then((results) => {
      if (results) {
        res.send(
          results.map((v) => {
            const { picture, ...rest } = v;
            return {
              ...rest,
              picture: toUint8Array(picture.split("base64,")[1]),
            };
          })
        );
      } else {
        res.send([]);
      }
    });
});
app.post("/fetchChats", async (req, res) => {
  let { usersCollection, chatsCollection } = await collections;
  const token = req.body.token;

  let { uid } = jwt.verify(token, process.env.secretKey);
  chatsCollection
    .find({ users: { $in: [uid] } })
    .toArray()
    .then((chats) => {
      return chats.map((chat) => {
        let { uid: chatId, users, messages } = chat,
          user = users.find((v) => v != uid);
        return usersCollection.findOne({ uid: user }).then((user) => {
          const { picture, ...otherRest } = user;

          return {
            messages,
            user: {
              ...otherRest,
              picture: toUint8Array(picture.split("base64,")[1]),
            },
            chatId,
          };
        });
      });
    })
    .then((processedChats) => {
      Promise.all(processedChats).then((processedChats) => {
        res.send(processedChats);
      });
    });
});

io.sockets.on("connection", async function (socket) {
  console.log("connected");
  let { chatsCollection, usersCollection } = await collections;
  usersCollection.updateOne(
    { uid: socket.handshake.query.customId },
    { $set: { socketId: socket.id } }
  );

  socket.on("sendMessage", function (message) {
    const {
      text,
      image,
      createdAt,
      user: userId,
      otherUser: otherUserId,
      sender,
      id,
    } = message;
    // console.log(message, id)
    let processedMessage = {
      uid: `${userId}_${otherUserId}`,
      messages: [
        {
          messageId: id.split("-").join(""),
          text: text,
          image: image,
          user: sender,
          createdAt: Timestamp.fromNumber(createdAt),
        },
      ],
    };
    // console.log(processedMessage.users, socket.id);
    usersCollection
      .findOne({
        uid: otherUserId,
      })
      .then((otherUser) => {
        chatsCollection
          .findOne({ users: { $all: [userId, otherUserId] } })
          .then((chat) => {
            if (chat) {
              chatsCollection
                .updateOne(
                  {
                    users: { $all: [userId, otherUserId] },
                  },
                  {
                    $push: {
                      messages: processedMessage.messages[0],
                    },
                  }
                )
                .then((success) => {
                  if (success) {
                    io.to(otherUser.socketId).emit(
                      "sendMessage",
                      JSON.stringify({
                        message: {
                          text,
                          image,
                          createdAt,
                          user: sender,
                          id,
                        },
                        chatId: chat.uid,
                      })
                    );
                  }
                });
            } else {
              chatsCollection.insertOne(processedMessage, (err, success) => {
                if (success) {
                  processedMessage.messages[0].id =
                    processedMessage.messages[0].messageId;
                  delete processedMessage.messages[0].messageId;
                  let { uid, messages } = processedMessage;
                  usersCollection
                    .findOne({
                      socketId: socket.id,
                    })
                    .then((user) => {
                      const { picture, socketId, ...rest } = user;
                      io.to(otherUser.socketId).emit(
                        "sendChat",
                        JSON.stringify([
                          {
                            messages,
                            user: {
                              ...rest,
                              picture: toUint8Array(
                                picture.split("base64,")[1]
                              ),
                            },
                            chatId: uid,
                          },
                        ])
                      );
                    });
                }
              });
            }
          });
      });
  });

  socket.on("placeCall", (data) => {
    usersCollection
      .findOne({
        uid: data.peerId,
      })

      .then((otherUser) => {
        const { picture, socketId, ...rest } = otherUser;
        io.to(otherUser.socketId).emit(
          "incomingCall",
          JSON.stringify([
            {
              description: data.description,
              user: {
                ...rest,
                picture: toUint8Array(picture.split("base64,")[1]),
              },
            },
          ])
        );
      });

    // console.log(data);
    // socket.emit('incomingCall', )
  });

  socket.on("ipaddr", function () {
    let ifaces = os.networkInterfaces();
    for (let dev in ifaces) {
      ifaces[dev].forEach(function (details) {
        if (details.family === "IPv4" && details.address !== "127.0.0.1") {
          socket.emit("ipaddr", details.address);
        }
      });
    }
  });
});

http.listen(4000, ipAdrress, () => {
  // console.log(ipAdrress);
  // bcrypt.hash("horlamedhey", 10).then(hash => console.log(hash));

  console.log(`Listening on http://${ipAdrress}:4000`);
});
