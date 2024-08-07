import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Constants from '../components/Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons'

const ForgotPassword = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text style={Constants.Constants.loginCreateForgot}>
      Forgot{'\n'}
      password?      </Text>
      <View style={Constants.Constants.textInput}>
        <MaterialCommunityIcons

          style={Constants.Constants.icon}
          name="email"
          size={25}
          color={'#626262'}
        />
        <TextInput placeholder="Enter your email address" />
      </View>
     
      <Text
        style={{alignSelf: 'flex-end', right: 20, top: 15,}}>
        * We will send you a message to set or reset your new password
      </Text>
      <View style={{justifyContent:'center',alignItems:'center',top:20,marginVertical:20}}>
      <TouchableOpacity style={{top:20,marginVertical:20,alignSelf:'center',borderWidth:1,height:50,width:300,backgroundColor:'#F83758',justifyContent:'center',borderRadius:4}}><Text style={{alignSelf:'center',textAlign:'center',fontSize:20,color:'white'}}>Submit</Text></TouchableOpacity>
      </View>
      
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
