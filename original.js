'use strict';
/*
const movieTemplate = Handlebars.compile(
  'Film {{title}} začíná v {{time}}, sál číslo {{hall}}'
);

const movie1 = {
  title: 'Casablanca',
  time: '19:30',
  hall: 7,
};

const movie2 = {
  title: 'Avengers',
  time: '16:00',
  hall: 5,
};

const movie3 = {
  title: 'Joker',
  time: '20:00',
  hall: 1,
};

const programTemplateTest = Handlebars.compile(
  `<span class="movie__title">{{movies.[0].title}}</span>
  <span class="movie__time">{{movies.[0].time}}</span>
  <span class="movie__hall">{{movies.[0].hall}}</span>
  `
);
const parasiteElm = document.createElement('div');
parasiteElm.innerHTML = programTemplateTest(cinema1);
const moviesElm = document.querySelector(".cinema__movies");
moviesElm.appendChild(parasiteElm);


const renderMovie = (cinema) => {
  const programTemplate = Handlebars.compile(
    `<span class="movie__title">{{movies.[0].title}}</span>
    <span class="movie__time">{{movies.[0].time}}</span>
    <span class="movie__hall">{{movies.[0].hall}}</span>
    `
  ); const newFilms = document.createElement('name');
  newFilms.innerHTML = programTemplate(cinema);
  return newFilms;
}

moviesElm.appendChild(renderMovie(cinema2));

const cinema2 = {
  name: 'Bio Oko',
  address: 'Františka Křížka 460/15',
  movies: [
    {
      title: 'Twelve angry men',
      time: '17:00',
      hall: 2,
    },
    {
      title: 'Fight club',
      time: '20:30',
      hall: 4,
    },
    {
      title: 'Román pro ženy',
      time: '16:15',
      hall: 1,
    },
  ],
};

const cinema3 = {
  name: 'Aero',
  address: 'Biskupcova 31',
  movies: [
    {
      title: 'Bourne identity',
      time: '19:00',
      hall: 5,
    },
    {
      title: 'Butterfly effect',
      time: '21:00',
      hall: 2,
    },
    {
      title: 'Quiet place',
      time: '22:30',
      hall: 3,
    },
  ],
};

*/

const cinema1 = {
  name: 'Světozor',
  address: 'Vodičkova 41',
  movies: [
    {
      title: 'Parasite',
      time: '18:00',
      hall: 3,
    },
    {
      title: 'Inception',
      time: '20:00',
      hall: 1,
    },
    {
      title: 'Želary',
      time: '17:30',
      hall: 2,
    },
  ],
};

/*vybiram z HTML cast pod template, ktery ma id cinema template
<template id="cinema-template"> 
<div>
  <span class="name">{{name}}</span>
  <span class="address">{{address}}</span>
</div>
</template> a vytvarim sablonu za pomoci metody Handlebars.compile*/

const cinemaTemplate = Handlebars.compile(
  document.querySelector("#cinema-template").innerHTML
);

//funkce bere kino, a vytvori v HTML element podle template. pouzije name a address z cinema
const renderCinema = (cinema) => {
  const helperELm = document.createElement("div");
  helperELm.innerHTML = cinemaTemplate(cinema);
  return helperELm.children[0];
  
};

//HTML vytvorene fuknci renderCinema pridame jako child elementu s tridou cinema__head
document.querySelector(".program").appendChild(renderCinema(cinema1));

/*vyberu z HTML 
<template id="movie-template">
            <div>
              <span class="movie__title">{{title}}</span>
              <span class="movie__time">{{time}}</span>
              <span class="movie__hall">{{hall}}</span>
            </div>
          </template> 
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

//HTML, ktere nam vratila fce pridame jako child do divu s tridou cinema__movies, pomoci for cyklu vypiseme vsechny filmy 
for (let i = 0; i < cinema1.movies.length; i++) {
document.querySelector(".cinema__movies").appendChild(renderMovie(cinema1.movies[i]));
};











