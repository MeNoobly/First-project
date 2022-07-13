"use strict";

// Variables

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

// Functional

start();
rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB(personalMovieDB);

// All functions

function start () {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while(numberOfFilms == "" || 
    numberOfFilms == null || 
    isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }

    personalMovieDB.count = numberOfFilms;
}

function rememberMyFilms () {
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
}

function detectPersonalLevel () {
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
}

function showMyDB (dataBase) {
    if (!dataBase.private) {
        console.log(dataBase);
    }
}

function writeYourGenres () {
    while (personalMovieDB.genres.length != 3) {
        for (let i = 1; i < 4; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre != "" &&
                genre != null) {
            personalMovieDB.genres.push(genre);
            } else {
                i--;
            }
        } 
    }
}