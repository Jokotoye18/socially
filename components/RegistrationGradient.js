import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {hp, wp} from '../utils/responsiveDesign';

const RegistrationGradient = ({children}) => {
  return (
    <SafeAreaView style={{flex: 1, marginTop: hp(-150)}}>
        <LinearGradient
          style={[{flex: 1, borderWidth: 0}]}
          colors={['#F9BC2C', '#F74C06']}
        >
          <View style={{marginTop: hp(200), flex: 1}}>{children}</View>
        </LinearGradient>
    </SafeAreaView>
  );
};

export default RegistrationGradient;
