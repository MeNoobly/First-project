"use strict";

// Variables

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,

    writeYourGenres () {
        while (this.genres.length != 3) {
            for (let i = 1; i < 4; i++) {
                const genre = prompt(`Ваш любимый жанр под номером ${i}`);
    
                if (genre != "" &&
                    genre != null) {
                this.genres.push(genre);
                } else {
                    alert("Вы ввели некоректные данные");
                    i--;
                }
            } 
        }

        this.genres.forEach((value, index) => console.log(`Любимый жанр ${index + 1} - это ${value}`));
    },

    showMyDB (dataBase) {
        if (!dataBase.private) {
            console.log(dataBase);
        }
    },

    detectPersonalLevel () { 
        if (this.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (this.count >= 10 && 
            this.count <= 30) {
            alert("Вы классический зритель");
        } else if (this.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },

    rememberMyFilms () {
        for (let i = 0; i < 2; i++) {
            const lastWatchingFilms = prompt("Один из последних просмотренных фильмов", ""),
                evaluatingTheFilm = +prompt("На сколько оцените его?", "");
        
            if (lastWatchingFilms != null && 
                evaluatingTheFilm != null && 
                lastWatchingFilms.length < 50 && 
                lastWatchingFilms != "" && 
                evaluatingTheFilm != "") {
                    this.movies[lastWatchingFilms] = evaluatingTheFilm;
            } else {
                i--;
            }
        }
    },

    start () {
        this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    
        while(this.count == "" || 
        this.count == null || 
        isNaN(this.count)) {
            this.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },

    toggleVisibleMyDB () {
        if (this.private) {
            this.private = false;
        } else {
            this.private = true;
        }
    },
    
};

// Functional

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
//personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB);