"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    const lastWatchingFilms = prompt("Один из последних просмотренных фильмов", ""),
        evaluatingTheFilm = +prompt("На сколько оцените его?", "");

    if (lastWatchingFilms != null && 
        evaluatingTheFilm != null && 
        lastWatchingFilms.length < 50 && 
        lastWatchingFilms != "" && 
        evaluatingTheFilm != "") {
        personalMovieDB.movies[lastWatchingFilms] = evaluatingTheFilm;
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && 
    personalMovieDB.count <= 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

