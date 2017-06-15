"use strict";
const pokemonItem = (pokemon) => {
    const imgId=('000'+pokemon.entry_number).slice(-3);
    const divPokemon = $('<div class="pokemonContainer"></div>');
    const imgPokemon = $(`<img src="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/${imgId}.png" alt="">`);
    const names = $(`<div class="pokes">${pokemon.pokemon_species.name}</div>`);

    divPokemon.append(imgPokemon);
    divPokemon.append(names);

    return divPokemon;
}
const reRender = (grid,inputValue)=>{
    grid.empty();
    const filteredPokemon = filterByPokemon(state.pokemon,inputValue);
    console.log(filteredPokemon);
    $.each(filteredPokemon,(index,pokemon)=>{
        grid.append(pokemonItem(pokemon));
    });
}
const SearchPokemon = _=>{
    const formSearch = $('<form class="form-control"></form>');
    const divSearch = $('<div></div>');
    const input = $('<input type="search">')
    const iconSearch =$('<a class="fa fa-search" href="#" aria-hidden="true"></a>');
    const grid = $('<div class="grid-pokemon"></div>');

    divSearch.append(input);
    divSearch.append(iconSearch);
    formSearch.append(divSearch);
    formSearch.append(grid);

    input.on('keyup',_=>{
        const inputValue = input.val();
        reRender(grid,inputValue);
    });
    reRender(grid,"");
    return formSearch;
}
