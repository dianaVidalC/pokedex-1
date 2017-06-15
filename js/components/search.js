"use strict";
const pokemonItem = (pokemon,update) => {
    const divPokemon = $('<div class="pokemonContainer"></div>');
    const imgPokemon = $('<img src="" alt="">');

    return divPokemon;
}
const reRender = (grid,inputValue,update)=>{
    grid.empty();
    const filteredPokemon = filterByPokemon(state.pokemon,inputValue);
    $each(filteredPokemon,(index,pokemon)=>{
        grid.append(pokemonItem(pokemon,update));
    });
}
const SearchPokemon = (update)=>{
    const formSearch = $('<form class="form-control"></form>');
    const divSearch = $('<div></div>');
    const input = $('<input type="search">')
    const iconSearch =$('<a class="fa fa-search" href="#" aria-hidden="true"></a>');
    const grid = $('<div class="grid-pokemon"></div>');

    divSearch.append(input);
    divSearch.append(iconSearch);
    formSearch.append(divSearch);

    input.on('keyup',_=>{
        const inputValue = input.val();
        reRender(grid,inputValue,update);
    });
    //reRender(grid,"",update);
    return formSearch;
}