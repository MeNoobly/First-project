const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const lastWatchingFilms = prompt("Один из последних просмотренных фильмов", ""),
      evaluatingTheFilm = +prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastWatchingFilms] = evaluatingTheFilm;

console.log(personalMovieDB);