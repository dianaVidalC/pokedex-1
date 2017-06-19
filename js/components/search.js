"use strict";
const pokemonItem = (pokemon) => {
    const idPokemonImg =('000'+pokemon.entry_number).slice(-3);
    const urlPokemon = pokemon.pokemon_species.url;
    const idPokemon = pokemon.entry_number+'/';
    const divPokemon = $('<div class="pokemon-container"></div>');
    const figurePokemon = $('<figure class="pokemon-image"></figure>');
    const imgPokemon = $(`<img src="http://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idPokemonImg}.png" alt="">`);
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

    divPokemon.on('click', (e)=>{
        state.pokemonComponent=figurePokemon[0].outerHTML;

          $.getJSON(urlPokemon,(jsonResponse)=>{
              state.pokemonSpecie=jsonResponse;
              $.getJSON('http://pokeapi.co/api/v2/pokemon/'+idPokemon,(json)=>{
                state.pokemonSelected=json;
                // const abilityUrl = state.pokemonSelected.abilities.forEach((elem)=>{
                //   $.getJSON(elem.ability.url,(response)=>{
                //
                //   })
                // });
                state.pokemonSelected.arrTypes=[];
                state.pokemonSelected.types.forEach((elem)=>{
                  $.ajax({
                    url: elem.type.url,
                    dataType: 'json',
                    async: false,
                    success : function(data) {
                      state.pokemonSelected.arrTypes.push(data);
                    }
                  });
                });
                const modalPokemon=$('#modal-pokemon');
                renderModal(modalPokemon);
              });
          });

    });
    return divPokemon;
}
const reRender = (grid,inputValue)=>{
    grid.empty();
    const filteredPokemon = filterByPokemon(state.pokemon,inputValue);
    $.each(filteredPokemon,(index,pokemon)=>{
       grid.append(pokemonItem(pokemon));
    });
}

const renderModal=(modal)=>{
  modal.empty();
  let nameType=[], damages=[];
  state.pokemonSelected.arrTypes.forEach((elem)=>{
    nameType.push(filterLanguage(elem.names)[0].name);
    elem.damage_relations.half_damage_to.forEach((e)=>{
      if(damages.indexOf(e.name)==-1){
        damages.push(e.name);
      }
    });
  })
  console.log(damages);
  const objPokemonDetails = {
     name: filterLanguage(state.pokemonSpecie.names)[0].name,
     description: filterLanguage(state.pokemonSpecie.flavor_text_entries)[0].flavor_text,
     category : filterLanguage(state.pokemonSpecie.genera)[0].genus,
     abilities : state.pokemonSelected.abilities.map((e)=>e.ability.name),
     height:state.pokemonSelected.height,
     weight:state.pokemonSelected.weight,
     type : nameType,
     weakness:damages
  }
  modal.append(PokemonDetails(objPokemonDetails));
  modal.show();
};
const PokemonSearch = ()=>{
    const section = $('<section class="search-pokemon"></section>')
    const formSearch = $('<form class="form-control"></form>');
    const divSearch = $('<div class="search"></div>');
    const input = $('<input type="search">');
    const spanAZ = $('<span class="a-z">A-Z</span>');
    const iconSearch =$('<a class="fa fa-search" href="#" aria-hidden="true"></a>');
    const grid = $('<div class="grid-pokemon flex-container"></div>');

    divSearch.append(input);
    divSearch.append(spanAZ);
    divSearch.append(iconSearch);
    formSearch.append(divSearch);
    formSearch.append(grid);
    section.append(formSearch);

    input.on('keyup',_=>{
        const inputValue = input.val();
        reRender(grid,inputValue);
    });
    reRender(grid,"");
    return section;
}
