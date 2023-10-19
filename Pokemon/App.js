import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import inicio from './src/Inicio';
import Categorias from './src/categorias';
import PokemonLista from './src/pokemones';
import PokeInfo from './src/pokeInfo';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="inicio">
        <Stack.Screen name="inicio" component={inicio} options={{ title: 'Inicio' }} />
        <Stack.Screen name="Categorias" component={Categorias} options={{ title: 'Categorías' }} />
        <Stack.Screen name="PokemonLista" component={PokemonLista} options={{ title: 'Pokémon Lista' }} />
        <Stack.Screen name="PokeInfo" component={PokeInfo} options={{ title: 'Estadísticas del Pokémon' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;