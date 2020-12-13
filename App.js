/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// #F9BC2C
// #F74C06

import React, {useState, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';
import Button from './components/buttons/Button';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import SplashScreen from './screens/splash/SplashScreen';
import {slides, renderItem} from './screens/app-intro/AppIntro';
import {hp} from './utils/responsiveDesign';
import NavigationComponent from './navigations/Index';
import {AuthProvider} from './context/AuthContext';

const App: () => React$Node = () => {
  const [showappIntro, SetShowAppIntro] = useState(true);
  const [appLoading, setAppLoading] = useState(true);

  useEffect(() => {
    const subscribe = setTimeout(() => {
      setAppLoading(false);
    }, 3000);
    return () => clearTimeout(subscribe);
  }, []);

  if (appLoading) {
    return <SplashScreen />;
  }

  if (showappIntro) {
    return (
      <>
        <StatusBar barStyle="light-content" backgroundColor="#F9BC2C" />
        <AppIntroSlider
          data={slides}
          renderItem={renderItem}
          showNextButton={false}
          showDoneButton={false}
        />
        <View style={styles.getStarted}>
          <Button
            title="Get started"
            handlePress={() => SetShowAppIntro(false)}
          />
        </View>
      </>
    );
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#F9BC2C" />
      <NavigationComponent />
    </>
  );
};

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};

const styles = StyleSheet.create({
  getStarted: {
    backgroundColor: '#F74C06',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: hp(52),
  },
});
