import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import {hp, wp} from '../../utils/responsiveDesign';
import RegistrationGradient from '../../components/RegistrationGradient';
import Button from '../../components/buttons/Button';
import {styles} from '../registration/Styles';
import User from '../../assets/images/user.png';
import Circle from '../../assets/images/circle.png';
import Icon from '../../assets/images/Vector(8).png';
import Icon1 from '../../assets/images/Vector(10).png';

const Profile = () => {
  const [displayName, setDSisplayName] = useState('');

  return (
    <RegistrationGradient>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={[styles.container]}>
        <ScrollView>
          <Text style={styles.getStarted}>Choose Profile Picture</Text>
          <View style={styles1.profilePhoto}>
            <ImageBackground source={Circle} style={styles1.bg}>
              <Image source={User} style={styles1.userIcon} />
            </ImageBackground>
          </View>
          <View style={styles1.inputContainer}>
            <View style={styles1.icon}>
              <Image source={Icon} />
            </View>
            <TextInput
              value={displayName}
              onChangeText={(text) => setDSisplayName(text)}
              placeholder="Enter display name"
              placeholderTextColor="#CFC7C7"
              style={styles1.input}
              textContentType="username"
            />
            <View style={styles1.icon}>
              <Image source={Icon1} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View
        // behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={styles.btnBox}>
        <View style={styles1.btn}>
          <Button title="Continue" />
        </View>
      </View>
    </RegistrationGradient>
  );
};

export default Profile;

const styles1 = StyleSheet.create({
  bg: {
    width: 126,
    height: 126,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  userIcon: {
    resizeMode: 'contain',
  },
  inputContainer: {
    borderBottomWidth: 1.5,
    borderColor: '#fff',
    height: hp(54),
    backgroundColor: '#DC8D45',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    color: '#fff',
    fontFamily: 'Raleway-Regular',
  },
  profilePhoto: {
    alignItems: 'center',
    marginTop: hp(20),
    marginBottom: hp(54),
  },
  icon: {
    flexBasis: '13%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    alignItems: 'center',
    marginBottom: hp(52),
  },
});
