import './App.css';
import React from 'react';
import pokemons from './data';
import Pokedex from './Pokedex';
import pic from './pokemonlogo.png';

class App extends React.Component {
  render() {
  
    return (
      <div className = 'App'>
      <img src={pic} id = 'logo'alt="pokemon logo"></img>
      <Pokedex pokemons={pokemons} />
      </div>
    );
  }
}

export default App;
