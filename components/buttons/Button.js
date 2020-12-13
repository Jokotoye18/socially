import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { hp, wp } from '../../utils/responsiveDesign';

export default ({title, handlePress}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handlePress} style={styles.btn}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        height: hp(54),
        width: wp(342),
        backgroundColor: '#fff',
        borderRadius: hp(7),
    },
    title: {
        fontWeight: '700',
        fontSize: hp(16),
        textTransform: 'capitalize',
        color: '#F74C06'
    }
})