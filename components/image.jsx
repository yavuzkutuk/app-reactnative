import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

const Avatar = ({ name }) => {
  return <Image style={styles.logo} source={require(`../assets/${name}`)} />;
};

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
});
export default Avatar;
