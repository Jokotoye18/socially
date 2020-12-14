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

  const handleLogin = () => {
    if (!codeInput) {
      return showToastWithGravity('Please enter your valid phone number');
    }
    const user = users.find((user) => user.matric === codeInput);
    if (user) {
      dispatch({
        type: 'LOGIN_SUCCEED',
        payload: user,
      });
    } else {
      showToastWithGravity(`Matric number: ${codeInput} does not exist!`);
    }
  };

  return (
    <>
      <RegistrationGradient>
        <View style={styles.container}>
          <KeyboardAvoidingView
            behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
            <Text style={styles.getStarted}>Get started</Text>
            <Text style={styles.title}>Enter your matric number</Text>
            <View style={styles.row}>
              <Text style={styles.span}>Socially</Text>
              <Text style={styles.subTitle}>
                will send an SMS message to verify your phone number.
              </Text>
            </View>
          </KeyboardAvoidingView>
          <View style={{marginTop: hp(30)}}>
            {/* <View style={styles.phoneInputRow}>
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
            </View> */}
            <TextInput
              value={codeInput}
              style={styles.codeInput}
              placeholder="Enter matric number"
              placeholderTextColor="#e5dddd"
              onChangeText={(text) => setCodeInput(text)}
            />
            <View style={styles.btn}>
              <Button title="Login" handlePress={handleLogin} />
            </View>
          </View>
          {/* <Text style={[styles.subTitle, styles.msg]}>
            Carrier SMS charges may apply
          </Text> */}
        </View>
      </RegistrationGradient>
    </>
  );
};
