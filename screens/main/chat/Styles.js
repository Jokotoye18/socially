import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {wp, hp} from '../../../utils/responsiveDesign'

export const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container: {
        paddingHorizontal: wp(10),
        marginTop: hp(20)
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: hp(18),
        borderBottomWidth: .5,
        borderColor: '#959494',
        paddingBottom: hp(12)
    },
    img: {
        resizeMode: 'contain',
        width: 60,
        height: 60,
        borderWidth: 1,
        marginRight: wp(12)
    },
    nameMessage: {
        flex: 1,
    },
    name: {
        fontFamily: 'Raleway-Regular',
        fontWeight: '700',
        color: '#252525',
        fontSize: hp(15),
        paddingBottom: hp(6)
    },
    message: {
        fontFamily: 'Raleway-Regular',
        fontWeight: '500',
        color: '#4F4E4E',
        fontSize: hp(12)
    },
    info: {
        flexBasis: '15%',
    },
    time: {
        color: '#8D8B8B',
        textAlign: 'center',
        fontSize: hp(11),
        fontFamily: 'Raleway-Regular',
        fontWeight: '500',
        paddingBottom: hp(8)
    },
    messageNumber: {
        color: '#186224',
        textAlign: 'center',
        fontSize: hp(11),
        fontFamily: 'Raleway-Regular',
        fontWeight: '500',
    }
})
