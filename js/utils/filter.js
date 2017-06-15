"use strict";
function filterByPokemon(pokemons,query) {
  var filter = pokemons.filter((pokemon)=>{
    return pokemon.pokemon_species.name.indexOf(query)!=-1;
  });
  return filter;
}
