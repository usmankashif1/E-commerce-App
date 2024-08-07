import {StyleSheet, TextInput} from 'react-native';

const Constants = StyleSheet.create({
  Heading: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'Montserrat-ExtraBold',
  },
  subHeading: {
    fontSize: 14,
    margin: 20,
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
  },
  nextPrev: {
    color: '#F83758',
    fontSize: 18,
    top: 10,
    fontFamily: 'Montserrat-SemiBold',
  },
  loginCreateForgot: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 36,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
    top: 20,
    left: 20,
    marginVertical:20
  },
  textInput: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#F3F3F3',
    top: 20,
    marginVertical: 20,
    marginLeft: 20,
    left:20,

    height:55,
    width:317
  },
  icon:{
    top:15,
    marginLeft:20
  }
});

const theme = {
  primaray: 'black',
  Extra_Bold: 'Montserrat-ExtraBold',
  Bold: 'Montserrat-Bold',
  Semi_Bold: 'Montserrat-SemiBold',
};

export default {Constants, theme};
