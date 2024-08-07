import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Constants from '../components/Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import ForgotPassword from './ForgotPassword';
import SignUp from './SignUp';


const Login = () => {
  const navigation=useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text style={Constants.Constants.loginCreateForgot}>
        Welcome{'\n'}Back!
      </Text>
      <View style={Constants.Constants.textInput}>
        <Ionicons
          style={Constants.Constants.icon}
          name="person"
          size={25}
          color={'#626262'}
        />
        <TextInput placeholder="Username or Email" />
      </View>
      <View style={[Constants.Constants.textInput, {}]}>
        <Fontisto
          style={Constants.Constants.icon}
          name="locked"
          size={23}
          color={'#626262'}
        />
        <TextInput placeholder="Password" />
        
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('ForgotPassword')}>
      <Text 
        style={{alignSelf: 'flex-end', right: 20, top: 15, color: '#F83758'}}>
        Forgot Password?
      </Text>
      </TouchableOpacity>
      <View style={{justifyContent:'center',alignItems:'center',top:20,marginVertical:20}}>
      <TouchableOpacity style={{top:20,marginVertical:20,alignSelf:'center',borderWidth:1,height:50,width:300,backgroundColor:'#F83758',justifyContent:'center',borderRadius:4}}><Text style={{alignSelf:'center',textAlign:'center',fontSize:20,color:'white'}}>Login</Text></TouchableOpacity>
      </View>
      <Text style={{textAlign:'center',top:20}}>-OR Continue With-</Text>
      <View style={{flexDirection:'row',justifyContent:'space-evenly',top:20,marginVertical:20}}>
        <Image style={{left:20}} source={require('../assets/images/Google.png')}/>
        <Image source={require('../assets/images/apple.png')}/>
        <Image style={{right:20}} source={require('../assets/images/Facebook.png')}/>
      </View>
      <View style={{flexDirection:'row',justifyContent:'center',top:20}}>
      <Text>Create An Account</Text>
      <Text onPress={()=>navigation.navigate('SignUp')} style={{left:5,color:'#F83758'}}>Sign Up</Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
