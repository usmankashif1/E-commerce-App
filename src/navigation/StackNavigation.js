import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../screens/SplashScreen';
import WelcomeSplash from '../screens/WelcomeSplash';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import ForgotPassword from '../screens/ForgotPassword';
import BottomNavigation from './BottomNavigation';
import Feather from 'react-native-vector-icons/Feather';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='BottomNavigation'>
        {showSplash ? (
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
        ) : (
          <>
            <Stack.Screen
              name="WelcomeSplash"
              component={WelcomeSplash}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{headerShown: false}}
            />
            <Stack.Screen
              options={{headerShown: false}}
              name="BottomNavigation"
              component={BottomNavigation}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
