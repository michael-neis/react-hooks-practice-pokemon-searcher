import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import { useState } from "react";
import { useEffect } from "react";

function PokemonPage() {
  const [allPokemon, setAllPokemon] = useState([])
  const [filteredPokemon, setFilteredPokemon] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    hp: '',
    frontUrl: '',
    backUrl: ''
  })

  useEffect(() => {
  fetch('http://localhost:4000/pokemon')
  .then(resp => resp.json())
  .then(data => {
      setAllPokemon(data)
      setFilteredPokemon(data)
  })
  }, [])


  function handleFilter(e){
    const matchingPokemon = allPokemon.filter(pokemonObj => 
      pokemonObj.name.toLowerCase().includes(e.target.value.toLowerCase())
    )
    setFilteredPokemon(matchingPokemon)
  }

  function handleSubmit(e){
    e.preventDefault()

    const newPokemon = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl
      }
    }

    fetch('http://localhost:4000/pokemon', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPokemon)
    })
    .then(resp => resp.json())
    .then(pokemon => {
       setAllPokemon([pokemon, ...allPokemon])
       setFilteredPokemon([pokemon, ...allPokemon])
    })

    setFormData({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    })
  }

  function handleFormData(e){
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm formData={formData} handleSubmit = {handleSubmit} handleFormData={handleFormData}/>
      <br />
      <Search handleFilter = {handleFilter} />
      <br />
      <PokemonCollection  pokemon = {filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;
