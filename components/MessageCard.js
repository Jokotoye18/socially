import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {hp, wp} from '../utils/responsiveDesign';

const MessageCard = ({bgColor, textColor, title}) => {
  return (
    <View style={[styles.box, {backgroundColor: bgColor}]}>
      <Text style={[styles.text, {color: textColor}]}>{title}</Text>
    </View>
  );
};

export default MessageCard;

const styles = StyleSheet.create({
  box: {
    padding: hp(16),
    borderRadius: hp(10),
    borderBottomLeftRadius: 0,
    width: wp(189),
    marginBottom: hp(210)
  },
  text: {
    fontFamily: 'Raleway-Regular',
    fontWeight: '500',
    fontSize: hp(11),
    lineHeight: hp(13)
  }
});
