import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React, { useEffect, useState } from 'react';
import {Rating} from 'react-native-ratings';

const TrendingProducts = () => {
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
  const dayoftheDeal = [
    {
      productImg:
        'https://5.imimg.com/data5/SELLER/Default/2023/9/341217915/KE/RX/OF/25065111/new-anarkali-kurta-set-with-new-style-women-s-printed-kurta-pant-dupatta-set-500x500.jpg',
      title: 'Women Printed Kurta',
      descriptio: 'Neque porro quisquam est qui dolorem ipsum quia',
      discountedPrice: 'Rs.1500',
      actualPrice: 'Rs.2499',
      offPrice: '40%Off',
      star: require('../assets/images/star.png'),
      reviews: '45345',
    },
    {
      productImg:
        'https://5.imimg.com/data5/SELLER/Default/2023/9/341217915/KE/RX/OF/25065111/new-anarkali-kurta-set-with-new-style-women-s-printed-kurta-pant-dupatta-set-500x500.jpg',
      title: 'Women Printed Kurta',
      descriptio: 'Neque porro quisquam est qui dolorem ipsum quia',
      discountedPrice: 'Rs.1500',
      actualPrice: 'Rs.2499',
      offPrice: '40%Off',
      star: require('../assets/images/star.png'),

      reviews: '45345',
    },
    {
      productImg:
        'https://5.imimg.com/data5/SELLER/Default/2023/9/341217915/KE/RX/OF/25065111/new-anarkali-kurta-set-with-new-style-women-s-printed-kurta-pant-dupatta-set-500x500.jpg',
      title: 'Women Printed Kurta',
      descriptio: 'Neque porro quisquam est qui dolorem ipsum quia',
      discountedPrice: 'Rs.1500',
      actualPrice: 'Rs.2499',
      offPrice: '40%Off',
      star: require('../assets/images/star.png'),

      reviews: '45345',
    },
    {
      productImg:
        'https://5.imimg.com/data5/SELLER/Default/2023/9/341217915/KE/RX/OF/25065111/new-anarkali-kurta-set-with-new-style-women-s-printed-kurta-pant-dupatta-set-500x500.jpg',
      title: 'Women Printed Kurta',
      descriptio: 'Neque porro quisquam est qui dolorem ipsum quia',
      discountedPrice: 'Rs.1500',
      actualPrice: 'Rs.2499',
      offPrice: '40%Off',
      star: require('../assets/images/star.png'),

      reviews: '45345',
    },
  ];
  return (
    <FlatList
    showsVerticalScrollIndicator={false}
      horizontal
      data={data}
      renderItem={({item}) => (
        <View
          style={{
            height: 300,
            width: 200,
            backgroundColor: 'white',
            top: 20,
            left: 20,
            // flexDirection:'row',
            flex: 1,
            marginHorizontal: 7,
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

export default TrendingProducts;

const styles = StyleSheet.create({});
