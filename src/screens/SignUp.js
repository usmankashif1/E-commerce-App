import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Constants from '../components/Constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
const SignUp = () => {
    const navigation=useNavigation();


    const signUp = ()=>{
      auth()
  .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
    }
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Text style={Constants.Constants.loginCreateForgot}>
      Create an {'\n'}
      account
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
        <TextInput secureTextEntry={true} placeholder="Password" />
        
      </View>
      <View style={[Constants.Constants.textInput, {}]}>
        <Fontisto
          style={Constants.Constants.icon}
          name="locked"
          size={23}
          color={'#626262'}
        />
        <TextInput secureTextEntry={true} placeholder="Confirm Password" />
        
      </View>
      <Text style={{left:20,top:20,marginHorizontal:20}}>
        By clicking the <Text style={{color:'#F83758'}}>Register</Text> button, you agree {'\n'} to the public offer
      </Text>
      <View style={{justifyContent:'center',alignItems:'center',top:20,marginVertical:20}}>
      <TouchableOpacity style={{top:20,alignSelf:'center',borderWidth:1,height:50,width:300,backgroundColor:'#F83758',justifyContent:'center',borderRadius:4}}><Text style={{alignSelf:'center',textAlign:'center',fontSize:20,color:'white'}}>Create Account</Text></TouchableOpacity>
      </View>
      <Text style={{textAlign:'center',top:20}}>-OR Continue With-</Text>
      <View style={{flexDirection:'row',justifyContent:'space-evenly',top:20,marginVertical:20}}>
        <Image style={{left:20}} source={require('../assets/images/Google.png')}/>
        <Image source={require('../assets/images/apple.png')}/>
        <Image style={{right:20}} source={require('../assets/images/Facebook.png')}/>
      </View>
      <View style={{flexDirection:'row',justifyContent:'center',top:20}}>
      <Text>I Already Have An Account</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
      <Text style={{left:5,color:'#F83758'}}>Sign in</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
