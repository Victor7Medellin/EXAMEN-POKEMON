import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const API_BASE_URL = 'https://pokeapi.co/api/v2/type/';

function PokemonLista({ route }) {
  const [pokemonList, setPokemonList] = useState([]);
  const { type } = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    fetchPokemonByType(type);
  }, [type]);

  const fetchPokemonByType = async (type) => {
    try {
      const response = await axios.get(API_BASE_URL + type);
      const data = response.data.pokemon;
      setPokemonList(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePokemonPress = async (item) => {
    try {
      const pokemonDetailsResponse = await axios.get(item.pokemon.url);
      const pokemonDetails = pokemonDetailsResponse.data;
      const pokemonStats = pokemonDetails.stats;

      navigation.navigate('PokeInfo', {
        pokemonName: item.pokemon.name,
        pokemonImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.pokemon.url.split("/")[6]}.png`,
        pokemonStats: pokemonStats,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Nombres de Pokémon de la categoría {type}:</Text>
      <FlatList
        data={pokemonList}
        keyExtractor={(item) => item.pokemon.name}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handlePokemonPress(item)}
            style={styles.pokemonItem}
          >
            <Image
              source={{
                uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.pokemon.url.split("/")[6]}.png`,
              }}
              style={styles.pokemonImage}
            />
            <Text>{item.pokemon.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pokemonItem: {
    flex: 1,
    alignItems: 'center',
    margin: 8,
  },
  pokemonImage: {
    width: 100,
    height: 100,
  },
});

export default PokemonLista;
