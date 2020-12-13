import React from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import {wp, hp} from '../../utils/responsiveDesign';
import Eclipse from '../../assets/images/Ellipse-white.png';
import S from '../../assets/images/S-orange.png';
console.log(wp(49));

export default ({eclipseStyle, letterSize, brandStyle}) => {
  return (
    <View style={styles.row}>
      <ImageBackground source={Eclipse} style={[styles.eclipse, eclipseStyle]}>
        <Image source={S} style={{width: letterSize, resizeMode: 'contain'}} />
      </ImageBackground>
      <Text
        style={[styles.brandText, brandStyle]}>
        ocially
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  eclipse: {
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain',
  },
  brandText: {
    fontWeight: '400',
    color: '#fff',
    fontFamily: 'Pacifico-Regular',
  }
});
