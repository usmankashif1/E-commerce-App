import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, { useEffect, useState } from 'react';
import {Rating} from 'react-native-ratings';

const DealofDay = () => {
  const [data,setData]= useState([])
  useEffect(()=>{
    api()
  },[])
  
  const api=async()=>{
    const response= await fetch('https://fakestoreapi.com/products')
    const jsonData=await response.json();
    console.log("🚀 ~ api ~ jsonData:", jsonData)
    setData(jsonData)
      }
  
  return (
    <FlatList
    showsHorizontalScrollIndicator={false}
      horizontal
      data={data}
      renderItem={({item}) => (
        <View
          style={{
            height: 310,
            width: 200,
            backgroundColor: 'white',
            left: 20,
            marginTop:20,
            marginHorizontal: 7,
             borderRadius:20,
          }}>
          <Image
            source={{uri: item.image}}
            style={{height: 150, width: 200,resizeMode:'contain'}}
          />
          <View style={{marginLeft:10,marginTop:10}}>
          <Text style={{fontSize: 15, color: 'black'}}>{item.title}</Text>
          <Text style={{color: 'black', fontSize: 15, fontWeight: 'bold',top:10}}>
            ${item.price}
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                textDecorationLine: 'line-through',
                textDecorationStyle: 'solid',
              }}>
              {item.actualPrice}
            </Text>
            <Text style={{left: 10, color: '#FE735C'}}>{item.offPrice}</Text>
          </View>
          <View style={{flexDirection: 'row',top:5}}>
            <Rating type="star" ratingCount={4} imageSize={20} />
            <Text style={{left:5,color:'black',fontSize:15}}>{item.rating.count}</Text>
          </View>
          
          </View>
          
        </View>
      )}
    />
  );
};

export default DealofDay;

const styles = StyleSheet.create({});
