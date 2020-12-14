import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {hp, wp} from '../utils/responsiveDesign';

const MessageCard = ({bgColor, textColor, title, position}) => {
  return (
    <View
      style={[
        styles.container,
        position === 'left'
          ? {alignItems: 'flex-start'}
          : {alignItems: 'flex-end'},
      ]}>
      <View style={[styles.box, {backgroundColor: bgColor}]}>
        <Text style={[styles.text, {color: textColor}]}>{title}</Text>
      </View>
    </View>
  );
};

export default MessageCard;

const styles = StyleSheet.create({
  container: {
    marginBottom: hp(36),
  },
  box: {
    padding: hp(16),
    borderRadius: hp(10),
    borderBottomLeftRadius: 0,
    width: wp(189),
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'Raleway-Regular',
    fontWeight: '500',
    fontSize: hp(11),
    lineHeight: hp(13),
  },
});
