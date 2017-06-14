"use strict";
const Header = _=>{
    const header = $('<header></header>');
    const title = $('<h1>Pokedex</h1>');
    header.append(title);
    return header;
}