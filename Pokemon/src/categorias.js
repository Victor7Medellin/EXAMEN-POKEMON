import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function Categorias({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Seleccione una categoría:</Text>
      <Button title="Agua" onPress={() => navigation.navigate('PokemonLista', { type: 'water' })} buttonStyle={styles.button} />
      <Button title="Fuego" onPress={() => navigation.navigate('PokemonLista', { type: 'fire' })} buttonStyle={styles.button} />
      <Button title="Tierra" onPress={() => navigation.navigate('PokemonLista', { type: 'ground' })} buttonStyle={styles.button} />
      <Button title="Volador" onPress={() => navigation.navigate('PokemonLista', { type: 'flying' })} buttonStyle={styles.button} />
      <Button title="Planta" onPress={() => navigation.navigate('PokemonLista', { type: 'grass' })} buttonStyle={styles.button} />
      <Button title="Hielo" onPress={() => navigation.navigate('PokemonLista', { type: 'ice' })} buttonStyle={styles.button} />
      <Button title="Lucha" onPress={() => navigation.navigate('PokemonLista', { type: 'fighting' })} buttonStyle={styles.button} />
      <Button title="Veneno" onPress={() => navigation.navigate('PokemonLista', { type: 'poison' })} buttonStyle={styles.button} />
      <Button title="Roca" onPress={() => navigation.navigate('PokemonLista', { type: 'rock' })} buttonStyle={styles.button} />
      <Button title="Bicho" onPress={() => navigation.navigate('PokemonLista', { type: 'bug' })} buttonStyle={styles.button} />
      <Button title="Siniestro" onPress={() => navigation.navigate('PokemonLista', { type: 'dark' })} buttonStyle={styles.button} />
      <Button title="Psíquico" onPress={() => navigation.navigate('PokemonLista', { type: 'psychic' })} buttonStyle={styles.button} />
      <Button title="Fantasma" onPress={() => navigation.navigate('PokemonLista', { type: 'ghost' })} buttonStyle={styles.button} />
      <Button title="Acero" onPress={() => navigation.navigate('PokemonLista', { type: 'steel' })} buttonStyle={styles.button} />
      <Button title="Normal" onPress={() => navigation.navigate('PokemonLista', { type: 'normal' })} buttonStyle={styles.button} />
      <Button title="Eléctrico" onPress={() => navigation.navigate('PokemonLista', { type: 'electric' })} buttonStyle={styles.button} />
      <Button title="Hada" onPress={() => navigation.navigate('PokemonLista', { type: 'fairy' })} buttonStyle={styles.button} />
      <Button title="Dragón" onPress={() => navigation.navigate('PokemonLista', { type: 'dragon' })} buttonStyle={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    marginVertical: 8,
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: '#007BFF',
  },
});

export default Categorias;
