import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
const GettStarted = () => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}
        source={require('../assets/images/background.png')}>
        <LinearGradient style={{bottom: 25, marginVertical: 20,borderRadius:20,flex:0.4}} colors={['black','black']}>
          <Text
            style={{
              fontSize: 34,
              textAlign: 'center',
              color: 'white',
              margin: 20,
            }}>
            You want Authentic, here you go!
          </Text>
          <Text style={{color: 'white', textAlign: 'center'}}>
            Find it here, buy it now!
          </Text>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              top: 20,
              marginVertical: 20,
            }}>
            <TouchableOpacity
              style={{
                height: 50,
                width: 300,
                backgroundColor: '#F83758',
                justifyContent: 'center',
                borderRadius: 6,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  textAlign: 'center',
                  fontSize: 20,
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                Get Started
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default GettStarted;

const styles = StyleSheet.create({});
