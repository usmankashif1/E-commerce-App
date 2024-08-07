import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CountSkip from '../components/CountSkip';
import Design from '../style/Design';
import AppIntroSlider from 'react-native-app-intro-slider';
import Constants from '../components/Constants';
import { useNavigation } from '@react-navigation/native';
import Login from './Login';


const WelcomeSplash = () => {
  const navigation = useNavigation();

  const slides = [
    {
      key: 1,
      pageNumber: '1',
      totalPage: '/3',
      title: 'Choose Products',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      image: require('../assets/images/shopOne.png'),
      backgroundColor: '#59b2ab',
    },
    {
      key: 2,
      pageNumber: '2',
      totalPage: '/3',
      title: 'Make Payment',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      image: require('../assets/images/shopTwo.png'),
      backgroundColor: '#febe29',
    },
    {
      key: 3,
      pageNumber: '3',
      totalPage: '/3',
      title: 'Get Your Order',
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      image: require('../assets/images/shopThree.png'),
      backgroundColor: '#22bcb5',
    },
  ];

  return (
    <AppIntroSlider
      renderNextButton={() => (
        <Text style={Constants.Constants.nextPrev}>Next</Text>
      )}
      renderDoneButton={() => (
        <Text
          onPress={() => navigation.navigate('Login')} // Use the screen name, not the component
          style={Constants.Constants.nextPrev}
        >
          Done
        </Text>
      )}
      renderPrevButton={() => (
        <Text style={Constants.Constants.nextPrev}>Previous</Text>
      )}
      showPrevButton={true}
      activeDotStyle={{ backgroundColor: '#17223B', width: 50 }}
      data={slides}
      renderItem={({ item, index }) => {
        return (
          <View style={Design.WelcomeScreenOneImage}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 15,
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <Text
                  style={[
                    Constants.theme.primaray,
                    { fontWeight: 'bold', fontSize: 18 },
                  ]}
                >
                  {item.pageNumber}
                </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#aaa' }}>
                  {item.totalPage}
                </Text>
              </View>
              <View>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                  <Text style={[Constants.Constants.Heading, { fontSize: 18 }]}>
                    Skip
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}
            >
              <Image source={item.image} />
              <Text style={Constants.Constants.Heading}>{item.title}</Text>
              <Text style={Constants.Constants.subHeading}>
                {item.description}
              </Text>
            </View>
          </View>
        );
      }}
    />
  );
};

export default WelcomeSplash;

const styles = StyleSheet.create({});
