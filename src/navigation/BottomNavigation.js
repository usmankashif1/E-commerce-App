import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../screens/HomePage';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import WishList from '../screens/WishList';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Cart from '../screens/Cart';
import Search from '../screens/Search';
import Setting from '../screens/Setting';

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{tabBarActiveTintColor:'#EB3030'}}>
      <Tab.Screen 
        name="HomePage"
        component={HomePage}
        options={{
          headerShown: false,
          tabBarIcon: ({}) => {
            return (
             <Feather name="home" color="black" size={20} />
            )
          },
          tabBarLabel: ({}) => {
            return (
             <Text>Home</Text>
            )
          },
        }}
        
      />
      <Tab.Screen
        name="WishList"
        component={WishList}
        options={{
          headerShown: false,
          tabBarIcon: ({}) => {
            return <Octicons name="heart" color="black" size={20} />;
          },
          tabBarLabel: ({}) => {
            return (
             <Text>WishList</Text>
            )
          },
        }}
      />
      <Tab.Screen
        name='Cart'
        component={Cart}
        options={{
          headerShown: false,
          tabBarIcon: ({}) => {
            return (
              <View
                style={{
                  height: 55,
                  width: 55,
                  borderRadius: 30,
                  alignItems: 'center',
                  justifyContent:'center',
                  backgroundColor: 'white',
                  elevation:4,
                }}>
                <Feather name="shopping-cart" color="black" size={30} />
              </View>
              
            );
          },
          tabBarLabel: ({}) => {
            return (
             <Text></Text>
            )
          },
          
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarIcon: ({}) => {
            return <FontAwesome name="search" color="black" size={20} />;
          },
          tabBarLabel: ({}) => {
            return (
             <Text>Search</Text>
            )
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: false,
          tabBarIcon: ({}) => {
            return <Feather name="settings" color="black" size={20} />;
          },
          tabBarLabel: ({}) => {
            return (
             <Text>Setting</Text>
            )
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
