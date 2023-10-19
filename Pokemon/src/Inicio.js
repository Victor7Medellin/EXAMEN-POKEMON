import React, { Component } from 'react';
import { View, Text, TextInput, FlatList, Image, StyleSheet, Keyboard, TouchableOpacity } from 'react-native';
import axios from 'axios';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
            data: [],
            loading: false,
        };
    }

    componentDidMount() {
        this.loadAllPokemon();
    }

    searchPokemon = async (text) => {
        const searchText = text.toLowerCase().trim();
        this.setState({ loading: true });
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
            const pokemonList = response.data.results;

            const filteredPokemon = pokemonList.filter((pokemon) => {
                return pokemon.name.startsWith(searchText);
            });

            const data = filteredPokemon.map((pokemon) => {
                return {
                    id: pokemon.name,
                    name: pokemon.name,
                    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/")[6]}.png`,
                };
            });

            this.setState({ data, loading: false });
        } catch (error) {
            console.error('Error al buscar el Pokémon:', error);
            this.setState({ loading: false });
        }
    };

    loadAllPokemon = async () => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000');
            const pokemonList = response.data.results;

            const data = pokemonList.map((pokemon) => {
                return {
                    id: pokemon.name,
                    name: pokemon.name,
                    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split("/")[6]}.png`,
                };
            });

            this.setState({ data, loading: false });
        } catch (error) {
            console.error('Error al cargar los Pokémon:', error);
            this.setState({ loading: false });
        }
    };

    handleSearchOnEnter = () => {
        this.searchPokemon(this.state.searchInput);
        Keyboard.dismiss();
    };

    handleCategoriesPress = () => {
        this.props.navigation.navigate('Categorias');

    };

    handlePokemonPress = async (item) => {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${item.id}`);
            const pokemonDetails = response.data;
            const pokemonStats = pokemonDetails.stats;

            this.props.navigation.navigate('PokeInfo', {
                pokemonName: item.name,
                pokemonImage: item.image,
                pokemonStats: pokemonStats,
            });
        } catch (error) {
            console.error(error);
        }
    };

    renderGridItem = ({ item }) => {
        if (item) {
            return (
                <TouchableOpacity onPress={() => this.handlePokemonPress(item)}>
                    <View style={styles.gridItem}>
                        <Image
                            source={{ uri: item.image }}
                            style={styles.gridItemImage}
                            resizeMode="contain"
                        />
                        <Text style={styles.gridItemName}>{item.name}</Text>
                    </View>
                </TouchableOpacity>
            );
        }
        return null;
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={this.handleCategoriesPress} style={styles.categoriesButton}>
                        <Text style={styles.categoriesButtonText}>Categorías</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Buscar Pokémon..."
                        value={this.state.searchInput}
                        onChangeText={(text) => {
                            this.setState({ searchInput: text });
                        }}
                        onSubmitEditing={this.handleSearchOnEnter}
                    />
                </View>
                {this.state.loading ? (
                    <Text>Cargando...</Text>
                ) : (
                    <FlatList
                        data={this.state.data}
                        keyExtractor={(item) => item.id}
                        renderItem={this.renderGridItem}
                        numColumns={2}
                        contentContainerStyle={styles.gridContainer}
                    />
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: 'white',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginBottom: 10,
    },
    categoriesButton: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
    },
    categoriesButtonText: {
      color: 'white',
      fontSize: 16,
    },
    searchContainer: {
      alignItems: 'center',
    },
    searchInput: {
      width: 250,
      height: 40,
      margin: 30,
      borderWidth: 3,
      borderColor: '#EC1C1C',
      borderRadius: 8,
      paddingHorizontal: 10,
      backgroundColor: 'white',
      textAlign: 'center',
    },
    gridContainer: {
      justifyContent: 'center',
      paddingVertical: 8,
    },
    gridItem: {
      flex: 1,
      alignItems: 'center',
      width: '40%',
      margin: '10%',
    },
    gridItemImage: {
      width: 150,
      height: 150,
      borderRadius: 10,
    },
    gridItemName: {
      marginTop: 8,
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });

export default App;
