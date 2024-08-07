import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

const Maps = () => {

  

  return (
    <View>
    <GooglePlacesAutocomplete
    placeholder="Search"
    
    query={{
      key: 'AIzaSyDt4NdceQbBpNM-6ufQdfYzPxd_BEDcOUQ',
      language: 'en',
    }}
/>

   <MapView
   initialRegion={{
    latitude: 28.4209037,
    longitude: 70.3310328,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
  style={{height:'100%',width:'100%'}}
   >
  
        <Marker
        coordinate={{  latitude: 28.4209037,
          longitude: 70.3310328,}}
          image={require('../assets/images/Google.png')}
        />
     
   

   </MapView>
   </View>
  )
}

export default Maps

const styles = StyleSheet.create({})