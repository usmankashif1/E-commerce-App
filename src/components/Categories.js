import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Categories = () => {
  const ProductCategory = [
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMQqimMf-xRxFO5Vzd0aGd5cJInAK07Tmlgg&s',
      name: 'Beauty',
    },
    {
      img: 'https://adoric.com/blog/wp-content/uploads/2022/11/freestocks-_3Q3tsJ01nc-unsplash.jpg',
      name: 'Fashion',
    },
    {
      img: 'https://thisblisslife.com/wp-content/uploads/2019/09/D51211F6-8C55-4284-9577-CD5BC92D0A0A-768x1024.jpg',
      name: 'Kids',
    },
    {
      img: 'https://media.istockphoto.com/id/887360960/photo/mens-suits-on-hangers-in-different-colors.jpg?s=612x612&w=0&k=20&c=RR19yJjRuR-CBWj9u1sQkFgtdYJ07KEkM678R0mtuZY=',
      name: 'Mens',
    },
    {
      img: 'https://media.istockphoto.com/id/916092484/photo/women-clothes-hanging-on-hangers-clothing-rails-fashion-design.jpg?s=612x612&w=0&k=20&c=fUpcbOITkQqitglZfgJkWO3py-jsbuhc8eZfb4sdrfE=',
      name: 'Womens',
    },
    {
      img: 'https://www.pumpitupparty.com/wp-content/uploads/2017/01/PileOfKidsBirthdayGifts.jpg',
      name: 'Gifts',
    },
  ];

  return (
    <View
      style={{
        backgroundColor: 'white',
        height: 90,
        borderRadius: 10,
        marginTop: 5,
        marginLeft: 20,
      }}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={ProductCategory}
        renderItem={({item}) => (
          <View style={{justifyContent: 'center', marginLeft: 20}}>
            <TouchableOpacity
              style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={{uri: item.img}}
                style={{width: 56, height: 56, borderRadius: 28}}
              />
              <Text style={{color: 'black', marginTop: 5}}>{item.name}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Categories;
