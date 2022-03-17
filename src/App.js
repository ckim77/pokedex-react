import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import poke from "./poke.png";

function App() {
  const [pokemon, setPokemon] = useState('pikachu');
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  const pokemonArray = [];

  const getPokemon = async() => {
    try {
      const res = await axios.get(url);
      pokemonArray.push(res.data);
      setPokemonInfo(pokemonArray);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }


  useEffect (() => {
    getPokemon();
  }, [])

  function handleChange (evt) {
    setPokemon(evt.target.value.toLowerCase());
  }
  
  const handleSubmit = evt => {
    evt.preventDefault();
    getPokemon();
  }

  return (
    <div className="App">
      <img className = "logo" src={poke} />
      <form>
        <input 
          className = "entry-box"
          placeholder = "Pokemon name"
          type = 'text'
          onChange = {handleChange}
        />

        <input
          className = "submit-btn"
          type = "submit"
          onClick = {handleSubmit}
        />
      </form>
      {pokemonInfo.map(data => {
        return (
          <div>
            <img src = {data.sprites.front_default} />
          <div className = 'poke-info'>
            <h3>Type: {data.types[0].type.name}</h3>
            <h3>Height: {Math.round(data.height * 3.9)} inches</h3>
            <h3>Weight: {Math.round(data.weight / 4.3)} lbs</h3>
            <h3>Poke-ID: {data.id}</h3>
          </div>
          </div>
        )
      })}

    </div>
  );
}

export default App;
