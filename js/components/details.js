"use strict";
const PokemonDetails = (update)=>{
    const modalPokemon = $('<div class="modal-pokemon flex-container"></div>');
    const modalContent = $('<div class="modal-content flex-container"></div>');
    const divPokemon = $(`<div class="poke-left">${state.pokemonComponent}</div>`);
    const divDetails = $('<div class="poke-right"></div>');
    const closeModal = $('<span class="close-modal">&times;</span>');
    const namePokemon = $('<h2>Beedrill</h2>');
    const description = $('<p>Lorem iiores nemo sunt explicabo voluptate, iusto totam, placeat consectetur! Rerum, facere, quisquam recusandae labore eius, magni id ullam laboriosam deleniti quaerat praesentium?</p>')
    const features = $('<div class ="features flex-container"></div>');
    const height = $('<div><h5>Altura:</h5><p>1,0m</p></div>');
    const weight = $('<div><h5>Peso:</h5><p>aaaaa</p></div>');
    const genero = $('<div><h5>Sexo:</h5><p>aaaaa</p></div>');
    const category = $('<div><h5>Categoria:</h5><p>aaaaa</p></div>');
    const ability = $('<div><h5>Habilidad:</h5><p>aaaaa</p></div>');
    const type = $('<div class ="type"></div>');
    const typeTitle = $('<h4>Tipo:</h4>');
    const type1 = $('<span>Bicho</span>');
    const type2 = $('<span>Bicho</span>');
    const weakness = $('<div class ="weakness"></div>');
    const weaknessTitle = $('<h4>Debilidad:</h4>');

    divDetails.append(namePokemon);
    divDetails.append(description);
    features.append(height);
    features.append(weight);
    features.append(genero);
    features.append(category);
    features.append(ability);
    divDetails.append(features);
    divDetails.append(type);
    type.append(typeTitle);
    type.append(type1);
    type.append(type2);
    divDetails.append(weakness);
    weakness.append(weaknessTitle);
    modalContent.append(divPokemon);
    modalContent.append(divDetails);
    modalContent.append(closeModal);
    modalPokemon.append(modalContent);

  //  update();
    return modalPokemon;
}
