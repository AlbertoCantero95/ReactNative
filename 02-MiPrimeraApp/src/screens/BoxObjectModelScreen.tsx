import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
   <View style={styles.container}>
        <Text style={styles.title}>Box Object Model</Text>
   </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor:'red',
  },title:{
    textAlign:'center',
    fontSize:20,
    margin:15,
    // width:150,
    // padding:50,
    borderWidth:10,
  },
});
