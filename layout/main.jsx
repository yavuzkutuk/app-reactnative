import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

// layout
import Header from './header';
import Footer from './footer';

// Screens + Routes
import Routes from '../routes';

const Main = ({ name }) => {
  return (
    <View style={styles.container}>
      {/*       <View style={styles.header}>
        <Header name={name} />
      </View> */}
      <View style={styles.main}>
        <Routes />
      </View>
      {/*       <View style={styles.footer}>
        <Footer />
      </View> */}
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.5,
    backgroundColor: 'red',
  },
  main: {
    flex: 5,
    backgroundColor: 'blue',
  },
  footer: {
    flex: 0.5,
    backgroundColor: 'red',
  },
});
