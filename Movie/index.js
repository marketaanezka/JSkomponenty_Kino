'use strict';

/*vyberu z HTML 
<template id="movie-template">
a za pomoci metody Handlebars.compile si sablonu ulozim*/
const movieTemplate = Handlebars.compile(
  document.querySelector("#movie-template").innerHTML
  );

//fuknce bere dany film (vstup je primo ten index pole movies) a vraci vytvoreny element podle sablony movieTemplate - bere z nej title, time a hall
  const renderMovie = (movie) => {
    const helperELm = document.createElement("div");
    helperELm.innerHTML = movieTemplate(movie);
    return helperELm.children[0];
  };
