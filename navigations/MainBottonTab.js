import React from 'react';
import {View, Text, Image} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Calls from '../screens/main/calls/Calls';
import Chat from '../screens/main/chat/Chat';
import Profile from '../screens/main/profile/Profile';
import {hp, wp} from '../utils/responsiveDesign';
import ChatFocused from '../assets/images/Vector(11).png';
import ChatUnFocused from '../assets/images/Vector(14).png';
import ProfileUnFocused from '../assets/images/Vector(12).png';
import ProfileFocused from '../assets/images/Vector(15).png';
import CallFocused from '../assets/images/Vector(16).png';
import CallUnfocused from '../assets/images/Vector(13).png';

const Tab = createMaterialBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      activeColor="#F74C06"
      inactiveColor="#8F8B8B"
      barStyle={{backgroundColor: '#fff', height: hp(68)}}>
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={focused ? ChatFocused : ChatUnFocused} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={focused ? ProfileFocused : ProfileUnFocused} />
          ),
        }}
      />
      <Tab.Screen
        name="Calls"
        component={Calls}
        options={{
          tabBarIcon: ({focused}) => (
            <Image source={focused ? CallFocused : CallUnfocused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
