import React from 'react';
import {StyleSheet} from 'react-native';
import {hp, wp} from '../../utils/responsiveDesign';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: wp(30),
  },
  getStarted: {
    fontWeight: '700',
    fontSize: hp(20),
    color: '#fff',
    paddingBottom: hp(31),
    fontFamily: 'Raleway-Regular'
  },
  title: {
    fontWeight: '600',
    fontSize: hp(14),
    color: '#e5dddd',
    paddingBottom: hp(7),
    fontFamily: 'Raleway-Regular'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  span: {
    fontFamily: 'Pacifico-Regular',
    fontWeight: '400',
    fontSize: hp(11),
    color: '#cfc7c7',
    paddingRight: hp(4),
  },
  subTitle: {
    fontWeight: '600',
    fontSize: hp(11),
    color: '#cfc7c7',
    fontFamily: 'Raleway-Regular'
  },
  phoneInputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: hp(50),
    marginBottom: hp(18),
    borderRadius: hp(7),
  },
  inputLeft: {
    flexBasis: '25%',
    backgroundColor: '#fff',
    borderTopLeftRadius: hp(7),
    borderBottomLeftRadius: hp(7),
  },
  inputRight: {
    flexBasis: '25%',
    backgroundColor: '#fff',
    borderTopRightRadius: hp(7),
    borderBottomRightRadius: hp(7),
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0
  },
  send: {
    color: '#f74c06',
    fontSize: hp(12),
    fontWeight: '600',
    fontFamily: 'Raleway-Regular'
  },
  input: {
    fontWeight: '600',
    color: '#e5dddd',
    flex: 1,
    paddingHorizontal: wp(15),
    backgroundColor: '#DC8D45',
  },
  codeInput: {
    borderWidth: 1,
    height: hp(65),
    borderRadius: hp(7),
    color: '#e5dddd',
    fontWeight: '600',
    paddingHorizontal: wp(15),
    backgroundColor: '#DC8D45',
    borderColor: '#E6DDDD'
  },
  msg: {
    textAlign: 'center',
    paddingTop: hp(18),
    fontFamily: 'Raleway-Regular'
  },
  btnBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  btn: {
    marginTop: hp(30),
    alignItems: 'center',
  },
  code: {
    paddingLeft: hp(8)
  },
  picker: {
    flex: 1,
    borderWidth: 1
  },
  pickerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  }
});
