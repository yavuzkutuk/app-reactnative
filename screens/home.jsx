import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

// Sections
import Articles from '../sections/home/articles';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Articles />
      <Button title="Profil" onPress={() => navigation.navigate('Profil')} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
