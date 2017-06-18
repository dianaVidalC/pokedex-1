"use strict";
function filterByPokemon(pokemons,query) {
  const filter = pokemons.filter((pokemon)=>{
      return pokemon.pokemon_species.name.indexOf(query.toLowerCase())!=-1;
  });

  return filter;
}

function filterLanguage(array){
  return array.filter((e,i)=>e.language.name=='es');  
}
//array.findIndex(x=>x.language.name=='es')
