import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {styles} from './Styles';
import img from '../../../assets/images/Vector(11).png';
import {AuthContext} from '../../../context/AuthContext';
import CHATSDATA from '../../../data/chats.json';
import ProfilePics from '../../../assets/images/Ellipse-7.png';

const Chat = ({navigation}) => {
  const {
    state: {user},
  } = useContext(AuthContext);

  // const messages = chats.filter(chat => chat.users.includes(user.uid))

  const RenderItem = ({item}) => {
    const {_id, messages, uid, users} = item;

    const friendMessages = messages.filter(message => message.user.uid === user.uid)
    // const lastMessage = friendMessages[friendMessages.length - 1]

    return (
      <TouchableOpacity 
        onPress={() => navigation.navigate('Messages',  {
          messages: messages
        })} 
        activeOpacity={0.5} style={styles.row}
      >
        <Image source={ProfilePics} style={styles.img} />
        <View style={styles.nameMessage}>
          <Text style={styles.name}>Mike love</Text>
          <Text style={styles.message}>Hello friend</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.time}>2:40pm</Text>
          <Text style={styles.messageNumber}>2</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.main}>
      <FlatList
        style={styles.container}
        data={CHATSDATA}
        keyExtractor={(item) => item.uid}
        renderItem={({item, index}) => <RenderItem item={item} />}
      />
    </SafeAreaView>
  );
};

export default Chat;
