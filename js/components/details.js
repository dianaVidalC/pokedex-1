"use strict";
const PokemonDetails = (pokemon)=>{
  console.log(pokemon.abilities.forEach((e)=>{e}));
    const divContainer = $('<div class="container flex-container"></div>');
    const modalContent = $('<div class="modal-content flex-container"></div>');
    const namePokemon = $(`<h2>${pokemon.name}</h2>`);
    const closeModal = $('<a href="#" class="close-modal">&times;</a>');
    const divData = $('<div class="data flex-container"></div>');
    const divPokemon = $(`<div class="poke-left">${state.pokemonComponent}</div>`);
    const divDetails = $('<div class="poke-right"></div>');
    const description = $(`<p>${pokemon.description}</p>`)
    const features = $('<div class ="features flex-container"></div>');
    const height = $(`<div><h5>Altura:</h5><p>${pokemon.height}</p></div>`);
    const weight = $(`<div><h5>Peso:</h5><p>${pokemon.weight}</p></div>`);
    const genero = $(`<div><h5>Sexo:</h5><p>s</p></div>`);
    const category = $(`<div><h5>Categoria:</h5><p>${pokemon.category}</p></div>`);
    const ability = pokemon.abilities.forEach((e)=>{$(`<p>${e}</p>`)});
    console.log(ability);
    const divAbility = $(`<div><h5>Habilidad:</h5>${ability}</div>`)
    const type = $('<div class ="type"></div>');
    const typeTitle = $('<h4>Tipo:</h4>');
    const type1 = $('<span>Bicho</span>');
    const type2 = $('<span>Bicho</span>');
    const weakness = $('<div class ="weakness"></div>');
    const weaknessTitle = $('<h4>Debilidad:</h4>');

    modalContent.append(namePokemon);
    modalContent.append(closeModal);
    divDetails.append(description);
    features.append(height);
    features.append(weight);
    features.append(genero);
    features.append(category);
    features.append(divAbility);
    divDetails.append(features);
    type.append(typeTitle);
    type.append(type1);
    type.append(type2);
    divDetails.append(type);
    weakness.append(weaknessTitle);
    divDetails.append(weakness);
    divData.append(divPokemon);
    divData.append(divDetails);
    modalContent.append(divData);
    divContainer.append(modalContent);

    closeModal.on('click',(e)=>{
      $('.modal-pokemon').hide();
    });

  //  update();
    return divContainer;
}
