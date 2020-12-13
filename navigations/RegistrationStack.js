import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Registration from '../screens/registration/Registration';
import Profile from '../screens/profile/Profile'
import Brand from '../components/shared/Brand';
import {wp, hp} from '../utils/responsiveDesign';
import BackArrow from '../assets/images/Vector(6).png'

const Stack = createStackNavigator();

const RegistrationStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({route, navigation}) => ({
        headerTitle: () => (
          <Brand
            eclipseStyle={styles.eclipseStyle}
            brandStyle={styles.brandStyle}
            letterSize={23}
          />
        ),
        headerTitleAlign: 'center',
        headerStyle: {
          height: hp(150),
          backgroundColor: 'transparent',
          elevation: 0,
        },
      })}>
      <Stack.Screen name="Registration" component={Registration} options={{}} />
      <Stack.Screen name="Profile" component={Profile} options={{
        headerTintColor: '#fff',
        
      }} />
    </Stack.Navigator>
  );
};

export default RegistrationStack;

const styles = StyleSheet.create({
  eclipseStyle: {
    width: 48.29,
    height: 44.37,
  },
  brandStyle: {
    fontSize: hp(23.15),
    marginLeft: wp(-4),
  },
});
