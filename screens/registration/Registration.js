import React, {useState, useContext} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {hp, wp} from '../../utils/responsiveDesign';
import RegistrationGradient from '../../components/RegistrationGradient';
import {AuthContext} from '../../context/AuthContext';
import Button from '../../components/buttons/Button';
import {Picker} from '@react-native-picker/picker';
import {styles} from './Styles';
import {codes, names} from './countrycodes';
import users from '../../data/users.json';

export default ({navigation}) => {
  const {dispatch} = useContext(AuthContext);

  const [numberInput, setNumberInput] = useState('');
  const [codeInput, setCodeInput] = useState('');
  const [code, setCode] = useState('+234');
  const [codeSent, setCodeSent] = useState(false);

  const countryPhoneCodes = codes();
  const countryName = names();

  const showToastWithGravity = (message) => {
    ToastAndroid.showWithGravityAndOffset(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      0,
      hp(60),
    );
  };

  const handleContinue = () => {
    navigation.navigate('Profile');
  };

  const handleSendCode = () => {
    if (!numberInput) {
      return showToastWithGravity('Please enter your valid phone number');
    }
    const user = users.find((user) => user.phone === numberInput);
    // console.log(user);
    if (user) {
      dispatch({
        type: 'LOGIN_SUCCEED',
        payload: user,
      });
    } else {
      showToastWithGravity(`user with phone: ${numberInput} does not exist!`);
    }
  };

  return (
    <>
      <RegistrationGradient>
        <ScrollView style={styles.container}>
          <View>
            <Text style={styles.getStarted}>Get started</Text>
            <Text style={styles.title}>Enter your phone number</Text>
            <View style={styles.row}>
              <Text style={styles.span}>Socially</Text>
              <Text style={styles.subTitle}>
                will send an SMS message to verify your phone number.
              </Text>
            </View>
          </View>
          <View style={{marginTop: hp(30)}}>
            <View style={styles.phoneInputRow}>
              <View style={styles.inputLeft}>
                <View style={styles.pickerRow}>
                  <Text style={styles.code}>{code}</Text>
                  <Picker
                    style={styles.picker}
                    selectedValue={code}
                    onValueChange={(itemValue, itemIndex) =>
                      setCode(itemValue)
                    }>
                    {countryPhoneCodes.map((phoneCodes, index) => (
                      <Picker.Item
                        key={index}
                        label={`${countryName[index]}: ${phoneCodes[1]}`}
                        value={phoneCodes[1]}
                      />
                    ))}
                  </Picker>
                </View>
              </View>
              <TextInput
                value={numberInput}
                style={styles.input}
                placeholder="Enter phone number"
                placeholderTextColor="#e5dddd"
                onChangeText={(text) => setNumberInput(text)}
                keyboardType="numeric"
                textAlign="center"
                textContentType="telephoneNumber"
              />
              <TouchableOpacity
                activeOpacity={0.5}
                style={styles.inputRight}
                onPress={handleSendCode}>
                <Text style={styles.send}>
                  {codeSent ? 'code sent' : 'send code'}
                </Text>
              </TouchableOpacity>
            </View>
            <TextInput
              value={codeInput}
              style={styles.codeInput}
              placeholder="Enter code"
              placeholderTextColor="#e5dddd"
              onChangeText={(text) => setCodeInput(text)}
              keyboardType="numeric"
              maxLength={6}
              textContentType="oneTimeCode"
            />
          </View>
          <Text style={[styles.subTitle, styles.msg]}>
            Carrier SMS charges may apply
          </Text>
        </ScrollView>
        <View
          style={styles.btnBox}
          // behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          >
          <View style={styles.btn}>
            <Button title="continue" handlePress={handleContinue} />
          </View>
        </View>
      </RegistrationGradient>
    </>
  );
};
