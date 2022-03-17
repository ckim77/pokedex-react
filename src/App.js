import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  const [pokemon, setPokemon] = useState('pikachu');
  const [pokemonInfo, setPokemonInfo] = useState([]);

  function handleChange(evt) {
    setPokemon(evt.target.value.tolower());
  }

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <form>
        <input 
          type = 'text'
          placeholder = 'Enter Pokemon name'
          onChange = {handleChange}
        />

      </form>
    </div>
  );
}

export default App;
