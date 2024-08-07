import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AppIntroSlider from 'react-native-app-intro-slider';
import Design from '../style/Design';
import Sizes from '../components/Sizes';
import Constants from '../components/Constants';
import {Rating} from 'react-native-ratings';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Cart = () => {
  const [data, setData] = useState(null);
  const [singleData, setSingleData] = useState(null);
  const [numColumns, setNumColumns] = useState(2);

  useEffect(() => {
    fetchApi();
    fetchSingleApi();
  }, []);

  const fetchApi = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const jsonData = await response.json();
    setData(jsonData);
  };

  const fetchSingleApi = async () => {
    const response = await fetch('https://fakestoreapi.com/products/1'); // corrected endpoint
    const jsonData = await response.json();
    setSingleData(jsonData);
  };

  const slides = [
    {
      key: '1',
      img: require('../assets/images/shoesimages.png'),
    },
    {
      key: '2',
      img: require('../assets/images/shoesimages.png'),
    },
    {
      key: '3',
      img: require('../assets/images/shoesimages.png'),
    },
  ];

  return (
    <ScrollView>
      <View style={Design.header}>
        <Entypo name="chevron-left" size={30} color={'black'} />
        <AntDesign name="shoppingcart" size={30} color={'black'} />
      </View>
      <View style={Design.sliderContainer}>
        <AppIntroSlider
          data={slides}
          renderItem={({item}) => (
            <View style={Design.sliderItem}>
              <Image style={Design.sliderImage} source={item.img} />
            </View>
          )}
          dotStyle={Design.dotStyle}
          activeDotStyle={Design.activeDotStyle}
          showNextButton={false}
          showDoneButton={false}
        />
      </View>
      <Sizes />
      <Text style={[Constants.Constants.Heading, Design.heading]}>
        Nike Sneakers
      </Text>
      <Text style={Design.description}>
        Vision Alta Men’s Shoes Size (All Colours)
      </Text>

      {singleData && (
        <>
          <View style={Design.ratingContainer}>
            <Rating type="star" ratingCount={5} imageSize={20} />
            <Text>{singleData.price}</Text>
          </View>
          <View style={Design.priceContainer}>
            <Text style={Design.priceText}>
              {singleData.price}
            </Text>
            <Text style={Design.actualPrice}>
              {singleData.price}
            </Text>
            <Text style={Design.discount}>
              50% Off
            </Text>
          </View>
        </>
      )}
      <Text style={Design.productDetailsTitle}>
        Product Details:
      </Text>
      <Text style={Design.productDetails}>
        Perhaps the most iconic sneaker of all-time, this original "Chicago"?
        colorway is the cornerstone to any sneaker collection. Made famous in
        1985 by Michael Jordan, the shoe has stood the test of time, becoming
        the most famous colorway of the Air Jordan 1.
      </Text>
      <View style={Design.storeOptionsContainer}>
        <View style={Design.storeOption}>
          <Entypo name="location" size={25} color={'black'} />
          <Text style={Design.storeOptionText}>Nearest Store</Text>
        </View>
        <View style={Design.vipOption}>
          <EvilIcons name="lock" size={25} color={'black'} />
          <Text style={Design.vipOptionText}>VIP</Text>
        </View>
        <View style={Design.returnPolicyOption}>
          <Fontisto name="arrow-return-left" size={25} color={'black'} />
          <Text style={Design.returnPolicyOptionText}>Return policy</Text>
        </View>
      </View>
      <View style={Design.buyNowContainer}>
        <TouchableOpacity>
          <Image
            style={Design.buyNowButton}
            source={require('../assets/images/buyNow.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={Design.gotoCartButton}
            source={require('../assets/images/gotoCart.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={Design.deliveryContainer}>
        <View style={Design.deliveryBox}>
          <Text style={Design.deliveryText}>Delivery in</Text>
          <Text style={Design.deliveryTime}>1 within Hour</Text>
        </View>
      </View>
      <View style={Design.similarOptionsContainer}>
        <View style={Design.similarOption}>
          <AntDesign name="eyeo" size={30} color="black" />
          <Text style={Design.similarOptionText}>View Similar</Text>
        </View>
        <View style={Design.similarOption}>
          <AntDesign name="shake" size={30} color="black" />
          <Text style={Design.similarOptionText}>Add to Compare</Text>
        </View>
      </View>
      <Text style={Design.similarTitle}>
        Similar To
      </Text>
      <View style={Design.featuredContainer}>
        <Text style={Design.featuredText}>52,082+ Items</Text>
        <View style={Design.sortButton}>
          <Text style={Design.buttonText}>Sort</Text>
          <Image source={require('../assets/images/arrow.png')} />
        </View>
        <View style={Design.filterButton}>
          <Text style={Design.buttonText}>Filter</Text>
          <Image source={require('../assets/images/filter.png')} />
        </View>
      </View>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={data}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <View style={Design.itemContainer}>
            <Image
              source={{ uri: item.image }}
              style={Design.itemImage}
            />
            <View style={Design.itemDetails}>
              <Text style={Design.itemTitle}>{item.title}</Text>
              <Text style={Design.itemPrice}>${item.price}</Text>
              <View style={Design.itemDiscount}>
                <Text style={Design.itemActualPrice}>
                  {item.actualPrice}
                </Text>
                <Text style={Design.itemOffPrice}>{item.offPrice}</Text>
              </View>
              <View style={Design.itemRating}>
                <Rating type="star" ratingCount={4} imageSize={20} />
                <Text style={Design.itemRatingCount}>
                  {item.rating?.count}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
};

export default Cart;
