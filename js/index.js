"use strict";
const render = (root)=>{
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    wrapper.append(Header());
    wrapper.append(PokemonSearch());
    root.append(wrapper);
}

const state = {
  pokemon :null,
  pokemonSelected :null,
  pokemonSpecie:null,
  pokemonComponent:null,
  language:'es'
};
$(_=>{
    getJSON('http://pokeapi.co/api/v2/pokedex/1/',(error, json)=>{
        if (error){return alert(error.message);}
        state.pokemon = json.pokemon_entries;
        const root = $('#root');
        render(root);
    });

})
