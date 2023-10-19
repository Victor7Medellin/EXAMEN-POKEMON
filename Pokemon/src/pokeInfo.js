import React from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

function PokeInfo({ route }) {
  const { pokemonName, pokemonImage, pokemonStats } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: pokemonImage }} style={styles.pokemonImage} />
      <Text style={styles.pokemonName}>{pokemonName}</Text>

      <Text style={styles.statsHeader}>Estadísticas:</Text>
      <FlatList
        data={pokemonStats}
        keyExtractor={(item) => item.stat.name}
        renderItem={({ item }) => (
          <View style={styles.statItem}>
            <Text style={styles.statName}>{capitalizeFirstLetter(item.stat.name)}:</Text>
            <Text style={styles.statValue}>{item.base_stat}</Text>
          </View>
        )}
      />
    </View>
  );
}

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f3f3',
  },
  pokemonImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  pokemonName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  statsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  statItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  statName: {
    fontSize: 16,
    textTransform: 'capitalize',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PokeInfo;