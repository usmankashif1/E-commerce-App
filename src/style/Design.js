import {StyleSheet} from 'react-native';

const Design = StyleSheet.create({
  splashScreenContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashScreenLogo: {
    height: 100,
    width: 274,
  },
  WelcomeScreenOne: {
    flex:1,
    backgroundColor: '#F5F5F5',
  },

  WelcomeScreenOneImage: {
    flex: 1,
    
  },
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
    justifyContent:'center',
    borderWidth: 1,
    borderRadius: 6,
    margin: 15,
    paddingLeft: 20,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
  },
  featuredContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
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
  buttonText: {
    fontSize: 16,
  },
  sliderContainer: {
    height: 200,
    marginVertical: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  sliderItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderImage: {
    width: '100%', // Ensure the image takes up the full width of its container
    height: '100%', // Ensure the image takes up the full height of its container
    resizeMode: 'cover', // Adjust to fit the image as needed
  },
  dotStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  activeDotStyle: {
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 12,
  },
  sliderContainer: {
    // your existing styles
  },
  sliderItem: {
    // your existing styles
  },
  sliderImage: {
    // your existing styles
  },
  dotStyle: {
    backgroundColor: 'gray',
  },
  activeDotStyle: {
    backgroundColor: 'black',
  },
  heading: {
    left: 15,
    marginTop: 10,
  },
  description: {
    marginLeft: 16,
    color: 'black',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop: 10,
    marginLeft: 15,
  },
  priceContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 12,
  },
  priceText: {
    left: 5,
    color: 'black',
    fontSize: 15,
    textDecorationLine: 'line-through',
  },
  actualPrice: {
    marginLeft: 14,
    color: 'black',
    fontSize: 15,
  },
  discount: {
    marginLeft: 10,
    color: 'black',
    fontSize: 15,
  },
  productDetailsTitle: {
    color: 'black',
    marginLeft: 20,
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },
  productDetails: {
    color: 'black',
    marginLeft: 20,
    fontSize: 14,
  },
  storeOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  storeOption: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 8,
    width: 130,
    borderRadius: 7,
  },
  storeOptionText: {
    color: 'black',
  },
  vipOption: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 6,
    width: 80,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vipOptionText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  returnPolicyOption: {
    flexDirection: 'row',
    borderWidth: 1,
    padding: 7,
    width: 130,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  returnPolicyOptionText: {
    color: 'black',
    fontSize: 15,
    marginLeft: 4,
  },
  buyNowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  buyNowButton: {
    height: 40,
    width: 140,
  },
  gotoCartButton: {
    height: 40,
    width: 140,
  },
  deliveryContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  deliveryBox: {
    height: 60,
    width: 350,
    backgroundColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#FFCCD5',
  },
  deliveryText: {
    color: 'black',
    marginLeft: 20,
  },
  deliveryTime: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 20,
  },
  similarOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  similarOption: {
    height: 48,
    width: 182,
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  similarOptionText: {
    fontSize: 17,
    color: 'black',
    marginLeft: 5,
  },
  similarTitle: {
    fontSize: 18,
    color: 'black',
    marginLeft: 10,
    marginTop: 10,
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
    margin: 10,
    backgroundColor: 'white',
    marginHorizontal: 7,
    borderRadius: 10,
  },
  itemImage: {
    height: 180,
    width: 180,
    resizeMode: 'contain',
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
});

export default Design;
