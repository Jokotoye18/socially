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
  FlatList,
} from 'react-native';
import MessageCard from '../../../components/MessageCard';
import {hp, wp} from '../../../utils/responsiveDesign';
import sendBg from '../../../assets/images/Ellipse-16.png';
import sendIcon from '../../../assets/images/Vector(23).png';
import emojiIcon from '../../../assets/images/Vector(24).png';
import {globalStyles} from '../../../styles/globalStyles';
import {messagesData} from '../../../data/messages';

const Messages = ({navigation, route}) => {
  const [input, setInput] = useState('');
  const width = Dimensions.get('screen').width;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      <FlatList
        style={styles.container}
        data={messagesData}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <MessageCard
            title={item.message}
            bgColor={item.userType === 'A' ? '#FEDFD2' : '#fff'}
            textColor={item.userType === 'A' ? '#F74C06' : '#1D1C1C'}
            position={item.userType === 'A' ? 'left' : 'right'}
          />
        )}
      />
      <View style={styles.inputPosition}>
        <View style={[styles.inputRow, globalStyles.rowBeteen]}>
          <View style={styles.emoji}>
            <Image source={emojiIcon} />
          </View>
          <TextInput
            style={styles.input}
            value={input}
            onChangeText={(text) => setInput(text)}
            placeHolder="Type a message"
            placeholderTextColor="#938585"
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
  container: {
    paddingHorizontal: wp(20),
    marginTop: hp(20),
  },
  inputPosition: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    marginBottom: hp(10),
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
    resizeMode: 'contain',
  },
});
