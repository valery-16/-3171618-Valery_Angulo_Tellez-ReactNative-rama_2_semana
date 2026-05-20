import React, { useMemo, useState } from 'react';
import {
  View,
  FlatList,
  Alert,
  StyleSheet,
  TextInput,
  Text,
} from 'react-native';

import { GLAMPING_SPOTS } from '../data/mockData';
import { ItemCard } from '../components/ItemCard';

import type { GlampingSpot } from '../types';

export function HomeScreen(): React.JSX.Element {

  // Estado del buscador
  const [search, setSearch] = useState('');

  // Filtrado en tiempo real
  const filteredGlampings = useMemo(() => {
    return GLAMPING_SPOTS.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  // Alert al presionar
  function handlePress(item: GlampingSpot) {
    Alert.alert('🌿 Natura Glamping', item.name);
  }

  return (
    <View style={styles.container}>

      {/* Título */}
      <Text style={styles.title}>
        🌿 Natura Glamping
      </Text>

      {/* Buscador */}
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar glamping..."
        placeholderTextColor="#999"
        value={search}
        onChangeText={setSearch}
      />

      {/* Lista */}
      <FlatList
        data={filteredGlampings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ItemCard
            item={item}
            onPress={handlePress}
          />
        )}

        // Estado vacío
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              😢 No se encontraron glampings
            </Text>
          </View>
        }

        contentContainerStyle={{
          paddingBottom: 30,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1d13',
    paddingTop: 50,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },

  searchInput: {
    backgroundColor: '#1b2e22',
    marginHorizontal: 16,
    marginBottom: 20,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: '#fff',
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#2f4f3d',
  },

  emptyContainer: {
    marginTop: 60,
    alignItems: 'center',
  },

  emptyText: {
    color: '#fff',
    fontSize: 18,
  },
});
