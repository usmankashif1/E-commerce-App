
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const CountSkip = (parameters) => {
  return (
      <View style={styles.header}>
        <Text style={styles.progress}>
          {parameters.pageNumber}/<Text style={styles.lightText}>3</Text>
        </Text>
        <TouchableOpacity>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
 
  header: {
    
    top: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  progress: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'black'
  },
  lightText: {
    color: '#aaa',
    fontWeight: 'bold',

  },
  skipText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',

  },
});

export default CountSkip;