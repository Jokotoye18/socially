import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RegistrationStack from './RegistrationStack';
import MainBottonTab from './MainBottonTab';
import ChatStack from './ChatStack'
import {AuthContext} from '../context/AuthContext';

const Index = () => {
  const {state, dispatch} = useContext(AuthContext);

  const {isAuth, user} = state;
  console.log(isAuth);
  console.log(user);

  return (
    <NavigationContainer>
      {isAuth ? <ChatStack /> : <RegistrationStack />}
    </NavigationContainer>
  );
};

export default Index;
