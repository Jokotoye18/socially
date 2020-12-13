import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import Chat from '../screens/main/chat/Chat';
import Brand from '../components/shared/Brand';
import {hp, wp} from '../utils/responsiveDesign';
import Bar from '../assets/images/Vector(17).png';
import Search from '../assets/images/Vector(18).png';

const Stack = createStackNavigator();

const ChatStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({route, navigation}) => ({
        headerStyle: {
          backgroundColor: 'transparent',
          elevation: 0,
          height: hp(100),
        },
        headerBackground: () => (
          <LinearGradient
            useAngle={true}
            angle={45}
            angleCenter={{
                x: 0.5,
                y: 0.5
            }}
            style={[{flex: 1}]}
            colors={['#F74C06','#F9BC2C']}></LinearGradient>
        ),
      })}>
      <Stack.Screen
        name="ChatsFeed"
        component={Chat}
        options={{
          headerLeft: () => <Image source={Bar} style={{marginLeft: hp(23)}} />,
          headerRight: () => (
            <Image source={Search} style={{marginRight: hp(23)}} />
          ),
          headerTitleAlign: 'center',
          headerTitle: (
            <Brand eclipseStyle={styles.eclipseStyle} letterSize={18.09} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default ChatStack;

const styles = StyleSheet.create({
  eclipseStyle: {
    width: 38.98,
    height: 35.82,
  },
});
