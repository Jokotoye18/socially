import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import Intro1 from '../../assets/images/Vector(1).png';
import Intro2 from '../../assets/images/Vector(2).png';
import Intro3 from '../../assets/images/Vector(3).png';
import Intro4 from '../../assets/images/Vector(4).png';
import Brand from '../../components/shared/Brand';
import {hp, wp} from '../../utils/responsiveDesign';
import Button from '../../components/buttons/Button';
import CustomGradient from '../../components/CustomGradient';

export const slides = [
  {
    key: '1',
    image: Intro1,
    text: 'Instantly connect with friends and families',
  },
  {
    key: '2',
    image: Intro2,
    text: 'Share amazing moments and places with friends and families',
  },
  {
    key: '3',
    image: Intro3,
    text: 'Make Free & Secure Calls',
  },
  {
    key: '4',
    image: Intro4,
    text: 'Send photos, videos and documents instantly',
  },
];

export const renderItem = ({item}) => {
  return (
    <CustomGradient gradientStyle={styles.gradientView}>
      <View style={styles.brand}>
        <Brand
          brandStyle={styles.brandStyle}
          eclipseStyle={styles.eclipseStyle}
          letterSize={22.4}
        />
      </View>
      <Image source={item.image} style={styles.img} />
      <Text style={styles.text}>{item.text}</Text>
    </CustomGradient>
  );
};

const styles = StyleSheet.create({
  gradientView: {
    flex: 1,
    alignItems: 'center',
  },
  eclipseStyle: {
    width: 48.29,
    height: 44.37,
    resizeMode: 'contain'
  },
  brandStyle: {
    fontSize: hp(23.15),
    marginLeft: wp(-4),
  },
  brand: {
    paddingVertical: hp(60),
  },
  img: {
    width: wp(328.61),
    height: hp(316.18),
    resizeMode: 'contain',
  },
  text: {
    fontSize: hp(16),
    fontWeight: '700',
    textAlign: 'center',
    maxWidth: wp(300),
    paddingTop: hp(54),
    color: '#FFF',
    fontFamily: 'Raleway-Regular'
  },
});

{
  /* <SafeAreaView style={{flex: 1}}>
  <LinearGradient style={styles.gradientView} colors={['#F9BC2C', '#F74C06']}>
    <View style={styles.brand}>
      <Brand
        brandStyle={styles.brandStyle}
        eclipseStyle={styles.eclipseStyle}
      />
    </View>
    <Image source={item.image} style={styles.img} />
    <Text style={styles.text}>{item.text}</Text>
  </LinearGradient>
</SafeAreaView>; */
}
