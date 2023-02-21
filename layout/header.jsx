import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Header = ({ name }) => {
  return (
    <View>
      <Text>header {name}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
