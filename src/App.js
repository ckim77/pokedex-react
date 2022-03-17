import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import axios from 'axios';

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
      <h1>Pokedex</h1>
      <form>
        <input 
          placeholder = "Enter pokemon name"
          type = 'text'
          onChange = {handleChange}
        />

        <input
          type = "submit"
          onClick = {handleSubmit}
        />
      </form>
      {pokemonInfo.map(data => {
        return (
          <div>
            <img src = {data.sprites.front_default} />
            <h3>{data.types[0].type.name}</h3>
            <h3>{Math.round(data.height * 3.9)}</h3>
            <h3>{Math.round(data.weight / 4.3)}</h3>
            <h3>{data.id}</h3>
          </div>
        )
      })}

    </div>
  );
}

export default App;
