"use strict";
function filterByPokemon(pokemons,query) {
  const filter = pokemons.filter((pokemon)=>{
      //const urlPokemon = pokemon.pokemon_species.url;
      state.urlPokemon = pokemon.pokemon_species.url;
      return pokemon.pokemon_species.name.indexOf(query)!=-1;
  });

  return filter;
}
