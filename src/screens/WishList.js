import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Rating } from 'react-native-ratings';

const WishList = () => {
  const [data, setData] = useState([]);
  const [numColumns, setNumColumns] = useState(2);

  useEffect(() => {
    productsAPIS();
  }, []);

  const productsAPIS = async () => {
    
      const response = await fetch('https://fakestoreapi.com/products');
      const jsondata = await response.json();
      setData(jsondata);
    
    }
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.menuIcon}>
          <FontAwesome name="reorder" size={23} color="black" />
        </View>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')}
        />
        <Image
          style={styles.profileIcon}
          source={require('../assets/images/profile.png')}
        />
      </View>
      <View style={styles.searchBox}>
        <EvilIcons name="search" size={23} color="black" />
        <TextInput
          placeholder="Search any Product"
          style={styles.searchInput}
        />
      </View>
      <View style={styles.featuredContainer}>
        <Text style={styles.featuredText}>52,082+ Items</Text>
        <View style={styles.sortButton}>
          <Text style={styles.buttonText}>Sort</Text>
          <Image source={require('../assets/images/arrow.png')} />
        </View>
        <View style={styles.filterButton}>
          <Text style={styles.buttonText}>Filter</Text>
          <Image source={require('../assets/images/filter.png')} />
        </View>
      </View>
      <FlatList
      showsVerticalScrollIndicator={false}
        data={data}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={{ uri: item.image }}
              style={styles.itemImage}
            />
            <View style={styles.itemDetails}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
              <View style={styles.itemDiscount}>
                <Text style={styles.itemActualPrice}>
                  {item.actualPrice}
                </Text>
                <Text style={styles.itemOffPrice}>{item.offPrice}</Text>
              </View>
              <View style={styles.itemRating}>
                <Rating type="star" ratingCount={4} imageSize={20} />
                <Text style={styles.itemRatingCount}>
                  {item.rating?.count}
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  menuIcon: {
    top: 6,
  },
  logo: {
    height: 38,
    width: 107,
  },
  profileIcon: {
    height: 48,
    width: 48,
    alignItems: 'center',
    bottom: 6,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    margin: 15,
    paddingLeft: 20,
    backgroundColor: 'white',
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
  },
  featuredContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 10,
  },
  featuredText: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  sortButton: {
    height: 30,
    width: 75,
    backgroundColor: 'white',
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  filterButton: {
    height: 30,
    width: 75,
    backgroundColor: 'white',
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  itemContainer: {
    height: 310,
    width: 180,
    margin:10,
    backgroundColor: 'white',
    marginHorizontal: 7,
    borderRadius: 10,
  },
  itemImage: {
    height: 150,
    width: 200,
    resizeMode: 'contain',
  },
  itemDetails: {
    marginLeft: 10,
    marginTop: 10,
  },
  itemTitle: {
    fontSize: 15,
    color: 'black',
  },
  itemPrice: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 10,
  },
  itemDiscount: {
    flexDirection: 'row',
    marginTop: 5,
  },
  itemActualPrice: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  itemOffPrice: {
    marginLeft: 10,
    color: '#FE735C',
  },
  itemRating: {
    flexDirection: 'row',
    marginTop: 5,
  },
  itemRatingCount: {
    marginLeft: 5,
    color: 'black',
    fontSize: 15,
  },
  buttonText: {
    fontSize: 14,
    color: 'black',
  },
});

export default WishList;
