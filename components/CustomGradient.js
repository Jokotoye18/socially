import React from 'react';
import {View, Text, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {wp, hp} from '../utils/responsiveDesign';

const CustomGradient = ({children, gradientStyle}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <ScrollView style={{borderWidth: 4}}> */}
        <LinearGradient
          style={[gradientStyle, {flex: 1}]}
          colors={['#F9BC2C', '#F74C06']}>
          {children}
        </LinearGradient>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

export default CustomGradient;
