"use strict";
const render = (root)=>{
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');
    //wrapper.append(Header());
  //  wrapper.append(PokemonSearch());//_=>{render(root)}

    if (state.pokemonSelected == null) {
      wrapper.append(PokemonSearch());
    }else {
      //wrapper.append(StationDetails( _ => render(root)));
      wrapper.append(PokemonDetails());
    }
    root.append(wrapper);
}

const state = {
  pokemon :null,
  pokemonDescription:null,
  pokemonSelected :null,
  pokemonComponent:null
};
$(_=>{
    getJSON('http://pokeapi.co/api/v2/pokedex/1/',(error, json)=>{
        if (error){return alert(error.message);}
        state.pokemon = json.pokemon_entries;
        const root = $('#root');
        render(root);
    });

})
