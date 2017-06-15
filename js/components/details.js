"use strict";
const PokemonDetails = (update)=>{
    const modalPokemon = $('<div class="modal-pokemon"></div>');
    const modalContent = $('<div class="modal-content"></div>');
    const divPokemon = $('<div class="poke-left"></div>');
    const divPokemon = $('<div class="poke-right"></div>');


    update();
    return modalPokemon;
}