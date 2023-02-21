import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Content = ({ title, description }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
  },
  description: {
    padding: 5,
    fontSize: 16,
  },
});
