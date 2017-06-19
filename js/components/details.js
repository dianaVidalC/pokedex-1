"use strict";
const PokemonDetails = (pokemon)=>{
  let ability = '',types = '', damages='';
    const divContainer = $('<div class="container flex-container"></div>');
    const modalContent = $('<div class="modal-content flex-container"></div>');
    const namePokemon = $(`<h2>${pokemon.name}</h2>`);
    const closeModal = $('<a href="#" class="close-modal">&times;</a>');
    const divData = $('<div class="data flex-container"></div>');
    const divPokemon = $(`<div class="poke-image">${state.pokemonComponent}</div>`);
    const divDetails = $('<div class="poke-details"></div>');
    const description = $(`<p>${pokemon.description}</p>`)
    const features = $('<div class ="features flex-container"></div>');
    const height = $(`<div><h5>Altura:</h5><p>${pokemon.height/10} m</p></div>`);
    const weight = $(`<div><h5>Peso:</h5><p>${pokemon.weight/10} kg</p></div>`);
    const genero = $(`<div><h5>Sexo:</h5><p>s</p></div>`);
    const category = $(`<div><h5>Categoria:</h5><p>${pokemon.category}</p></div>`);
    pokemon.abilities.forEach((e)=>{ability += `<p>${e}</p>`;});
    const divAbility = $(`<div><h5>Habilidad:</h5>${ability}</div>`);
    pokemon.type.forEach((e)=>{types += `<span class="${e}">${e}</span>`; });
    const type = $(`<div class ="type"><h4>Tipo:</h4>${types}</div>`);
    pokemon.weakness.forEach((e)=>{damages += `<span class="${e}">${e}</span>`;});
    const weakness = $(`<div class ="weakness"><h4>Debilidad:</h4>${damages}</div>`);

    modalContent.append(namePokemon);
    modalContent.append(closeModal);
    divDetails.append(description);
    features.append(height);
    features.append(weight);
    features.append(genero);
    features.append(category);
    features.append(divAbility);
    divDetails.append(features);
    divDetails.append(type);
    divDetails.append(weakness);
    divData.append(divPokemon);
    divData.append(divDetails);
    modalContent.append(divData);
    divContainer.append(modalContent);

    closeModal.on('click',(e)=>{
      $('.modal-pokemon').hide();
    });
    return divContainer;
}
