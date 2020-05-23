'use strict';

/*vybiram z HTML element s id cinema template
<template id="cinema-template"> 
 a vytvarim sablonu za pomoci metody Handlebars.compile*/
const cinemaTemplate = Handlebars.compile(
  document.querySelector("#cinema-template").innerHTML
);

const renderCinema = (cinema) => {
  //funkce bere kino, vytvari helpElm a do jeho innerHTML dava HTML podle sablony cinemaTemplate. ze vstupu si bere name a address
  const helperELm = document.createElement("div");
  helperELm.innerHTML = cinemaTemplate(cinema);
  ;
  //potom vyberu div s třídou movies__list skrze helperElm 
  const moviesElm = helperELm.querySelector(".movies__list ");
  //ted pouziju funkci renderMovie z js dokumentu ve slozce Movie a skrze for cyklus pro vsechny filmy v danem poli vytvorim HTMl podle sablony MovieTemplate. To pak pridam jako child do elementu moviesElm
  for (let i=0; i < cinema.movies.length; i++) {
  moviesElm.appendChild(renderMovie(cinema.movies[i]));
  }
  //fce nam vrati nase vytvorene elemnety v jednom divu, ktery jsme si vytvorili
  return helperELm.children[0]
};
