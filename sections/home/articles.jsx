import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

// Components
import Thumb from '../../components/image';
import Content from '../../components/content';

// Mock
const stacks = [
  { name: 'laravel', image: 'laravel.png', description: 'Framework PHP' },
  { name: 'symfony', image: 'sf.png', description: 'Framework PHP' },
  { name: 'vuejs', image: 'vuejs.png', description: 'Framework Javascript' },
];

const Articles = () => {
  return (
    <View style={styles.articles}>
      {stacks &&
        stacks.map((stack) => {
          return (
            <View style={styles.row}>
              <View>
                <Thumb name={stack.image} />
              </View>
              <View>
                <Content title={stack.name} description={stack.description} />
              </View>
            </View>
          );
        })}
    </View>
  );
};

export default Articles;

const styles = StyleSheet.create({
  articles: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    border: '1px solid black',
    borderRadius: 10,
    padding: 10,
  },
});
