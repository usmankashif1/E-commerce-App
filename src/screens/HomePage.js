import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Categories from '../components/Categories';
import AppIntroSlider from 'react-native-app-intro-slider';
import DealofDay from '../components/DealofDay';
import Design from '../style/Design';

const HomePage = () => {
  const slides = [
    {
      key: '1',
      img: require('../assets/images/SliderOne.png'),
    },
    {
      key: '2',
      img: require('../assets/images/SliderOne.png'),
    },
    {
      key: '3',
      img: require('../assets/images/SliderOne.png'),
    },
  ];

  return (
    <ScrollView>
      <View style={Design.container}>
        <View style={Design.header}>
          <View style={Design.menuIcon}>
            <FontAwesome name="reorder" size={23} color={'black'} />
          </View>
          <Image
            style={Design.logo}
            source={require('../assets/images/logo.png')}
          />
          <Image
            style={Design.profileIcon}
            source={require('../assets/images/profile.png')}
          />
        </View>
        <View style={Design.searchBox}>
          <EvilIcons name="search" size={23} color="black" />
          <TextInput
            placeholder="Search any Product"
            style={Design.searchInput}
          />
        </View>
        <View style={Design.featuredContainer}>
          <Text style={Design.featuredText}>All Featured</Text>
          <View style={Design.sortButton}>
            <Text style={Design.buttonText}>Sort</Text>
            <Image source={require('../assets/images/arrow.png')} />
          </View>
          <View style={Design.filterButton}>
            <Text style={Design.buttonText}>Filter</Text>
            <Image source={require('../assets/images/filter.png')} />
          </View>
        </View>
        <Categories />
        <View style={Design.sliderContainer}>
          <AppIntroSlider
            data={slides}
            renderItem={({item}) => (
              <View style={Design.sliderItem}>
                <Image style={styles.sliderImage} source={item.img} />
              </View>
            )}
            dotStyle={Design.dotStyle}
            activeDotStyle={Design.activeDotStyle}
            showNextButton={false}
            showDoneButton={false}
          />
        </View>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              height: 60,
              width: 355,
              backgroundColor: '#4392F9',
              borderRadius: 8,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{margin: 10}}>
              <Text style={{fontSize: 16, color: 'white', bottom: 5}}>
                Deal of the Day
              </Text>

              <View style={{flexDirection: 'row', top: 3}}>
                <FontAwesome name="clock-o" size={23} color={'white'} />

                <Text style={{left: 7, color: 'white'}}>
                  22h 55m 20s remaining{' '}
                </Text>
              </View>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 4,
                alignItems: 'flex-end',
                width: 89,
                right: 20,
                flexDirection: 'row',
                height: 28,
                alignItems: 'center',
                justifyContent: 'space-evenly',
                borderColor: 'white',
              }}>
              <Text style={{color: 'white'}}>View All</Text>
              <AntDesign name="arrowright" size={23} color={'white'} />
            </View>
          </View>
        </View>
        <DealofDay />
        <View style={{justifyContent: 'center', alignItems: 'center', top: 20}}>
          <View
            style={{
              width: 343,
              height: 84,
              backgroundColor: 'white',
              flexDirection: 'row',
              borderRadius: 6,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{height: 70, width: 70}}
              source={require('../assets/images/offerLogo.png')}
            />
            <View style={{marginLeft: 20}}>
              <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
                Special Offers
              </Text>
              <Text style={{color: 'black'}}>
                We make sure you get the {'\n'} offer you need at best prices
              </Text>
            </View>
          </View>
        </View>
        {/* <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            top: 20,
            marginVertical: 20,
          }}>
          {/* <Image
            style={{width: 370, height: 200}}
            source={require('../assets/images/mac.png')}
          /> */}
        </View> */}
        <View style={{alignItems: 'center',marginTop:20,}}>
          <View
            style={{
              height: 70,
              width: 355,
              backgroundColor: '#4392F9',
              borderRadius: 8,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{margin: 10}}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                Trending Products
              </Text>

              <View style={{flexDirection: 'row', top: 5,alignItems:'center'}}>
              <MaterialIcons
                    name="date-range"
                    size={23}
                    color={'white'}
                  />
                <Text style={{left: 7, color: 'white'}}>
                Last Date 29/02/22
                </Text>
              </View>
            </View>
            <View
              style={{
                borderWidth: 1,
                borderRadius: 4,
                alignItems: 'flex-end',
                width: 92,
                right: 20,
                flexDirection: 'row',
                height: 28,
                alignItems: 'center',
                justifyContent: 'space-evenly',
                borderColor: 'white',
              }}>
              <Text style={{color: 'white'}}>View All</Text>
              <AntDesign name="arrowright" size={23} color={'white'} />
            </View>
          </View>
        </View>
        <DealofDay/>
        <View style={{}}>
        <Image style={{height:220,width:390,marginTop:20}} source={require('../assets/images/HotSummerSale.png')}/>
        
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              height: 60,
              width: 355,
              borderRadius: 8,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{margin: 10}}>
              

              <View style={{ top: 5,alignItems:'flex-start'}}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'black',
                  fontWeight: 'bold',
                }}>
                New Arrivals
              </Text>
                <Text style={{color: 'black'}}>
                Summer’ 25 Collections
                </Text>
              </View>
            </View>
            <View
              style={{
                
                borderRadius: 4,
                alignItems: 'flex-end',
                width: 89,
                right: 20,
                flexDirection: 'row',
                height: 28,
                alignItems: 'center',
                justifyContent: 'space-evenly',
                backgroundColor:'#F83758'
              }}>
              <Text style={{color: 'white'}}>View All</Text>
              <AntDesign name="arrowright" size={23} color={'white'} />
            </View>
          </View>
        </View>
        </View>
        <Text style={{fontSize:20,color:'black',fontWeight:'bold',marginTop:10,left:10}}>Sponserd</Text>
        <Image style={{height:350,width:350,alignSelf:'center',top:10,borderRadius:6}} source={require('../assets/images/fiftyoff.png')}/>
        <Text style={{color:'black',fontWeight:'bold',marginTop:20,left:20,fontSize:20}}>up to 50% Off</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  
});

export default HomePage;
