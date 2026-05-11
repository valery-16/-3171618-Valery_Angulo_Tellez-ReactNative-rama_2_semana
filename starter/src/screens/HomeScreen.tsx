import React from 'react';
import {
  View,
  FlatList,
  Alert,
  StyleSheet,
} from 'react-native';

import { GLAMPING_SPOTS } from '../data/mockData';
import { ItemCard } from '../components/ItemCard';

import type { GlampingSpot } from '../types';

export function HomeScreen(): React.JSX.Element {

  function handlePress(item: GlampingSpot) {
    Alert.alert(item.name);
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={GLAMPING_SPOTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemCard
            item={item}
            onPress={handlePress}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    paddingTop: 40,
  },
});