
const cinema1 = {
  name: 'Světozor',
  address: 'Vodičkova 41',
  movies: [
    {
      title: 'Název',
      time: 'Čas',
      hall: 'Sál',
    },
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

const cinema2 = {
  name: 'Bio Oko',
  address: 'Františka Křížka 460/15',
  movies: [
    {
      title: 'Název',
      time: 'Čas',
      hall: 'Sál',
    },
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
      title: 'Název',
      time: 'Čas',
      hall: 'Sál',
    },
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

//vybereme si element s tridou program a postupne mu pridame jako child HTML vytvorene fuknci renderCinema (ze slozky cinema)
document.querySelector(".program").appendChild(renderCinema(cinema1));
document.querySelector(".program").appendChild(renderCinema(cinema2));
document.querySelector(".program").appendChild(renderCinema(cinema3));

