"use strict";
const PokemonDetails = (update)=>{
    const modalPokemon = $('<div class="modal-pokemon"></div>');

    update();
    return modalPokemon;
}