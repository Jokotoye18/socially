import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {hp, wp} from '../utils/responsiveDesign';
import {globalStyles} from '../styles/globalStyles';
import BackIcon from '../assets/images/Vector(19).png';
import VideoIcon from '../assets/images/Vector(21).png';
import MoreIcon from '../assets/images/Vector(20).png';
import CallIcon from '../assets/images/Vector(22).png';
import ProfileImg from '../assets/images/Ellipse-14.png';

export const MessageStackHeaderLeft = ({route, navigation}) => {
  return (
    <View style={[globalStyles.rowEnd, {paddingLeft: wp(15)}]}>

      <Image source={BackIcon} style={[styles.iconRightMargin]} />
      <View style={globalStyles.rowStart}>
        <Image
          source={ProfileImg}
          style={[styles.userImg]}
        />
        <View>
          <Text style={styles.userName}>Antony</Text>
          <Text style={styles.userStatus}>online</Text>
        </View>
      </View>
    </View>
  );
};

export const MessageStackHeaderRight = () => {
  return (
    <View style={[globalStyles.rowEnd, {paddingRight: wp(15)}]}>
      <Image source={VideoIcon} style={[styles.iconRightMargin]} />
      <Image source={CallIcon} style={[styles.iconRightMargin]} />
      <Image source={MoreIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconRightMargin: {
    marginRight: wp(30),
  },
  iconLeftMargin: {
    marginLeft: wp(30),
  },
  userImg: {
    width: wp(44),
    height: hp(44),
    resizeMode: 'contain',
    borderRadius: hp(44) / 2,
    marginRight: wp(8)
  },
  userName :{
    fontFamily: 'Raleway-Regular',
    fontWeight: '600',
    fontSize: hp(13),
    lineHeight: hp(15.26),
    color: '#fff'
  },
  userStatus:{
    fontFamily: 'Raleway-Regular',
    fontWeight: '500',
    fontSize: hp(9),
    lineHeight: hp(10.57),
    color: '#e5dddd'
  }
});
