"use strict";
const pokemonItem = (pokemon,update) => {
    const pokemonId =('000'+pokemon.entry_number).slice(-3);
    const pokemonUrl = pokemon.pokemon_species.url;
    const divPokemon = $('<div class="pokemonContainer"></div>');
    const figurePokemon = $('<figure class="pokemon-container"></figure>');
    const imgPokemon = $(`<img src="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonId}.png" alt="">`);
    //const imgPokemon = $(`<img src="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" alt="">`);
    const divBase = $ ('<div class="base"></div>');
    const pokeball = $('<img class="icon" src="assets/icon/pokeball_gray.png" alt="pokeball">');
    const heartIcon = $('<img class="icon" src="assets/icon/valentines-heart.png" alt="heart icon">');
    const dataIcon = $('<img class="icon" src="assets/icon/data.png" alt="data icon">');
    const namePokemon = $(`<div class="pokes">${pokemon.pokemon_species.name}</div>`);

    figurePokemon.append(imgPokemon);
    divBase.append(pokeball);
    divBase.append(heartIcon);
    divBase.append(dataIcon);
    figurePokemon.append(divBase);
    divPokemon.append(figurePokemon);
    divPokemon.append(namePokemon);

    getJSON(pokemonUrl,(error, json)=>{
        if (error){return alert(error.message);}
        state.urlPokemon = json.flavor_text_entries[3];
        console.log(state.urlPokemon);
    });

    divPokemon.on('click', (e)=>{
        e.preventDefault();

        //update();
    });

    return divPokemon;
}
const reRender = (grid,inputValue)=>{
    grid.empty();

    const filteredPokemon = filterByPokemon(state.pokemon,inputValue);
    $.each(filteredPokemon,(index,pokemon)=>{
       grid.append(pokemonItem('pokemon',_=>{reRender(grid,inputValue)}));
    });
}
const PokemonSearch = _=>{
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
