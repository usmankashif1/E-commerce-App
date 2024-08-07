import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Design from '../style/Design';

const SplashScreen = () => {
  return (
    <View style={Design.splashScreenContainer}>
      <Image
        style={Design.splashScreenLogo}
        source={require('../assets/images/logo.png')}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
