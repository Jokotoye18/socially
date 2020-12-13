import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import {wp, hp} from '../../../utils/responsiveDesign'

export const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: wp(20),
        marginTop: hp(30)
    },
    ProfileContainer: {
        alignItems: 'center',
        marginTop: hp(40),
        marginBottom: hp(98)
    },
    img: {
        width: 108,
        height: 108,
        borderRadius: 108 / 2,
        borderWidth: 1,
        borderColor: '#fff'
    },
    name: {
        fontSize: hp(14),
        fontFamily: 'Pacifico-Regular',
        color: '#fff',
        paddingRight: wp(10),
        fontWeight: '600'
    },
    username: {
        fontSize: hp(10),
        fontFamily: 'Raleway-Regular',
        color: '#fff',
        fontWeight: '600',
        paddingTop: hp(14)
    },
    about: {
        backgroundColor: 'rgba(44, 43, 43, 0.6)',
        paddingHorizontal: wp(36),
        paddingVertical: hp(24),
        flex: 1,
        overflow: 'visible'
    },
    aboutContent: {
        fontWeight: '700',
        fontSize: hp(12),
        fontFamily: 'Raleway-Regular',
        color: '#ACAAAA',
        lineHeight: hp(16),
        paddingBottom: hp(48),
    },
    mediaTitle: {
        fontWeight: '700',
        fontSize: hp(10),
        fontFamily: 'Raleway-Regular',
        color: '#9C9B9B',
        lineHeight: hp(12),
        marginRight: wp(20),
        paddingBottom: hp(5)
    },
    mediaActive: {
        borderBottomWidth: hp(1.3),
        borderColor: '#fff'
    }
})
