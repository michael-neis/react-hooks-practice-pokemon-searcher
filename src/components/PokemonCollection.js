import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {

  const pokemonList = pokemon.map(pokemon => <PokemonCard key={pokemon.name} id = {pokemon.id} name ={pokemon.name} hp = {pokemon.hp} sprites = {pokemon.sprites} />)

  return (
    <Card.Group itemsPerRow={6}>
      {pokemonList}
    </Card.Group>
  );
}

export default PokemonCollection;
