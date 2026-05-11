import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

import type { GlampingSpot } from '../types';

interface ItemCardProps {
  item: GlampingSpot;
  onPress: (item: GlampingSpot) => void;
}

export function ItemCard({
  item,
  onPress,
}: ItemCardProps): React.JSX.Element {
  return (
    <Pressable
      style={styles.card}
      onPress={() => onPress(item)}
    >
      <Text style={styles.title}>{item.name}</Text>

      <Text style={styles.text}>
        {item.location}
      </Text>

      <Text style={styles.text}>
        ${item.price}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#222',
    padding: 16,
    margin: 10,
    borderRadius: 10,
  },

  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  text: {
    color: '#ccc',
    marginTop: 4,
  },
});