import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Sizes = () => {
  const [selectedSize, setSelectedSize] = useState();
  return (
    <View style={styles.container}>
      <Text style={{fontSize:16,fontWeight:'bold',paddingLeft:12}}>Size: {selectedSize}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[
            styles.sizeButton,
            selectedSize === '6 UK' && styles.selectedButton,
          ]}
          onPress={() => setSelectedSize('6 UK')}>
          <Text
            style={[
              styles.sizeText,
              selectedSize === '6 UK' && styles.selectedText,
            ]}>
            6 UK
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.sizeButton,
            selectedSize === '7 UK' && styles.selectedButton,
          ]}
          onPress={() => setSelectedSize('7 UK')}>
          <Text
            style={[
              styles.sizeText,
              selectedSize === '7 UK' && styles.selectedText,
            ]}>
            7 UK
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.sizeButton,
            selectedSize === '8 UK' && styles.selectedButton,
          ]}
          onPress={() => setSelectedSize('8 UK')}>
          <Text
            style={[
              styles.sizeText,
              selectedSize === '8 UK' && styles.selectedText,
            ]}>
            8 UK
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.sizeButton,
            selectedSize === '9 UK' && styles.selectedButton,
          ]}
          onPress={() => setSelectedSize('9 UK')}>
          <Text
            style={[
              styles.sizeText,
              selectedSize === '9 UK' && styles.selectedText,
            ]}>
            9 UK
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.sizeButton,
            selectedSize === '10 UK' && styles.selectedButton,
          ]}
          onPress={() => setSelectedSize('10 UK')}>
          <Text
            style={[
              styles.sizeText,
              selectedSize === '10 UK' && styles.selectedText,
            ]}>
            10 UK
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 20,
  },
  sizeButton: {
    borderWidth: 3,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderColor: '#FA7189',
    borderRadius: 8,
    backgroundColor: 'white',
  },
  selectedButton: {
    backgroundColor: '#FA7189',
  },
  sizeText: {
    color: '#FA7189',
    fontSize: 15,
    fontWeight: 'bold',
  },
  selectedText: {
    color: 'white',
  },
});

export default Sizes;
