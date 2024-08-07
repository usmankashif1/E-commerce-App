// import Geolocation from '@react-native-community/geolocation';
// import React, { useEffect, useState } from 'react';
// import { Button, Image, View, Platform } from 'react-native';
// import { launchImageLibrary as _launchImageLibrary, launchCamera as _launchCamera } from 'react-native-image-picker';
// let launchImageLibrary = _launchImageLibrary;
// let launchCamera = _launchCamera;
// const App = () => {

//   useEffect(()=>{
//     UserLocation()
//   },[])

//   const UserLocation = ()=>{
//     Geolocation.getCurrentPosition((res)=>console.log(res))
//   }
//   const [selectedImage, setSelectedImage] = useState(null);

//   const openImagePicker = () => {
//     const options = {
//       mediaType: 'photo',
//       includeBase64: false,
//       maxHeight: 2000,
//       maxWidth: 2000,
//     };

//     launchImageLibrary(options, handleResponse);
//   };

//   const handleCameraLaunch = () => {
//     const options = {
//       mediaType: 'photo',
//       includeBase64: false,
//       maxHeight: 2000,
//       maxWidth: 2000,
//     };

//     launchCamera(options, handleResponse);
//   };

//   const handleResponse = (response) => {
//     console.log(response)
//     if (response.didCancel) {
//       console.log('User cancelled image picker');
//     } else if (response.error) {
//       console.log('Image picker error: ', response.error);
//     } else {
//       let imageUri = response.uri || response.assets?.[0]?.uri;
//       setSelectedImage(imageUri);
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center' }}>
//       {selectedImage && (
//         <Image
//           source={{ uri: selectedImage }}
//           style={{ flex: 1 }}
//           resizeMode="contain"
//         />
//       )}
//       <View style={{ marginTop: 20 }}>
//         <Button title="Choose from Device" onPress={openImagePicker} />
//       </View>
//       <View style={{ marginTop: 20, marginBottom: 50 }}>
//         <Button title="Open Camera" onPress={handleCameraLaunch} />
//       </View>
//     </View>
//   );
// };

// export default App;
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackNavigation from './src/navigation/StackNavigation'
import WelcomeSplash from './src/screens/WelcomeSplash'
import SignUp from './src/screens/SignUp'
import ForgotPassword from './src/screens/ForgotPassword'
import GettStarted from './src/screens/GettStarted'
import HomePage from './src/screens/HomePage'
import Categories from './src/components/Categories'
import DealofDay from './src/components/DealofDay'
import TrendingProducts from './src/components/TrendingProducts'
import Sizes from './src/components/Sizes'
import Cart from './src/screens/Cart'
import Maps from './src/components/Maps'


const App = () => {
  return (
  
    <StackNavigation/>
    // <Sizes/>
    // <Cart/>
    // <DealofDay/>
    // <Maps/>

  )
}

export default App

const styles = StyleSheet.create({})