import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

// Sections
import Articles from '../sections/home/articles';

const Home = () => {
  return (
    <View style={styles.container}>
      <Articles />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
