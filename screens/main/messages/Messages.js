import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import MessageCard from '../../../components/MessageCard';
import {hp, wp} from '../../../utils/responsiveDesign';
import sendBg from '../../../assets/images/Ellipse-16.png';
import sendIcon from '../../../assets/images/Vector(23).png';
import emojiIcon from '../../../assets/images/Vector(24).png';
import {globalStyles} from '../../../styles/globalStyles';

const Messages = ({navigation, route}) => {
  // console.log(route.params);
  const [input, setInput] = useState('');
  const width = Dimensions.get('screen').width;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      <ScrollView style={{paddingHorizontal: wp(20)}}>
        <MessageCard
          title="Yo, heard you are back from Italy. Whatsup?"
          bgColor="#FEDFD2"
          textColor="#F74C06"
        />
        <MessageCard
          title="Yo, heard you are back from Italy. Whatsup?"
          bgColor="#FEDFD2"
          textColor="#F74C06"
        />
        <MessageCard
          title="Yo, heard you are back from Italy. Whatsup?"
          bgColor="#FEDFD2"
          textColor="#F74C06"
        />
        <MessageCard
          title="Yo, heard you are back from Italy. Whatsup?"
          bgColor="#FEDFD2"
          textColor="#F74C06"
        />
        <MessageCard
          title="Yo, heard you are back from Italy. Whatsup?"
          bgColor="#FEDFD2"
          textColor="#F74C06"
        />
      </ScrollView>
      <View style={styles.inputPosition}>
        <View style={[styles.inputRow, globalStyles.rowBeteen]}>
          <View style={styles.emoji}>
            <Image source={emojiIcon} />
          </View>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={(text) => setInput(text)}
          />
          <View style={styles.sendContainer}>
            <ImageBackground source={sendBg} style={styles.send}>
              <Image source={sendIcon} style={styles.sendVec} />
            </ImageBackground>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Messages;

const styles = StyleSheet.create({
  inputPosition: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    marginLeft: (Dimensions.get('screen').width - wp(376)) / 2,
  },
  inputRow: {
    width: wp(376),
    height: hp(58),
    borderRadius: hp(55),
    backgroundColor: '#fff',
  },
  input: {
    flexBasis: '70%',
  },
  emoji: {
    flexBasis: '15%',
    alignItems: 'center',
  },
  sendContainer: {
    flexBasis: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  send: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    resizeMode: 'contain'
  },
  sendVec: {
    // alignItems: 'center',
    // justifyContent: 'center'
  },
});
