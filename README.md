# Pokédex
Pokédex es una app que muestra una lista de 721 pokemones, con sus respectivo detalle por cada pokemon; mostrados en un modal.
Para el desarrollo de esta app, se utilizó la The Pokemon RESTful API, siguiendo su documentación en http://pokeapi.co/docsv2/

La aplicacion se trabajó con el modelo de componentes de manera asincrona, los cuales son:
- Header
- PokemonSearch
- PokemonDetails

Para cargar la lista de todos los pokemon se utilizó el endpoint: http://pokeapi.co/api/v2/pokedex/1/
Para cargar los detalles de pokemon se consideró los siguientes endpoints:
 - Nombre, Descripcion, Categoría: http://pokeapi.co/api/v2/pokemon-species/{id-pokemon}
 - Altura, Peso, Habilidades, Tipos, Debilidades: http://pokeapi.co/api/v2/pokemon/{id-pokemon}
 - Para cargar la imagen del pokemon en el detalle se reutilizo el componente de pokemonItem.

**Ver aqui:** https://miriampc.github.io/pokedex/

Realizado por: Miriam Peralta Castañeda
