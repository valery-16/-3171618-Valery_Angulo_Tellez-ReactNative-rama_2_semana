import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

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
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
      onPress={() => onPress(item)}
    >

      {/* Nombre */}
      <Text style={styles.title}>
        🌿 {item.name}
      </Text>

      {/* Ubicación */}
      <Text style={styles.location}>
        📍 {item.location}
      </Text>

      {/* Precio */}
      <Text style={styles.price}>
        💙 ${item.price.toLocaleString()} COP
      </Text>

      {/* Capacidad */}
      <Text style={styles.info}>
        👥 Capacidad: {item.capacity} personas
      </Text>

      {/* Categoría */}
      <View style={styles.badge}>
        <Text style={styles.badgeText}>
          ✨ {item.category}
        </Text>
      </View>

    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1b2e22',
    padding: 18,
    marginHorizontal: 16,
    marginBottom: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#2f4f3d',
  },

  cardPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },

  title: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  location: {
    color: '#d6d6d6',
    fontSize: 16,
    marginBottom: 6,
  },

  price: {
    color: '#61DAFB',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  info: {
    color: '#e0e0e0',
    fontSize: 15,
    marginBottom: 10,
  },

  badge: {
    alignSelf: 'flex-start',
    backgroundColor: '#284d39',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 30,
  },

  badgeText: {
    color: '#8fffc1',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
