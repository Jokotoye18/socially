import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Brand from '../../components/shared/Brand';
import {hp, wp} from '../../utils/responsiveDesign';
import CustomGradient from '../../components/CustomGradient';

const SplashScreen = () => {
  return (
    <CustomGradient gradientStyle={styles.gradientView}>
      <Brand
        eclipseStyle={styles.eclipseStyle}
        brandStyle={styles.brandStyle}letterSize={30}
      />
      <Text style={styles.motto}>
        Connect with friends and families all over.
      </Text>
    </CustomGradient>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  gradientView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp(-200),
  },
  motto: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: hp(13),
    marginTop: hp(30),
    fontFamily: 'Raleway-Regular'
  },
  eclipseStyle: {
    width: 65,
    height: 60,
  },
  brandStyle: {
    fontSize: hp(31),
    marginLeft: wp(-6),
  },
});
