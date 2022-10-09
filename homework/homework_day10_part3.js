// JS Arrays & Objects

// NOTE: the movies array used in some exercises is defined at the end of this file

/* EXERCISE 11
Write a function called deleteProp which receives an object and a string as parameters,
and returns the given object after deleting its property named as the given string.
*/

console.log("<<< Exercise 11: >>>");
const obj = {
  id: 43,
  "how pow": {
    name: "Yes",
    isOn: true,
  },
  name: "Beets",
};

const deleteProp = (obj, string) => {
  let workingObj = {};
  workingObj = Object.assign({}, obj);
  let keys = Object.keys(workingObj);

  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === string) {
      delete workingObj[string];
    } else {
      console.log(
        "The inputted property does NOT match any of the object's properties"
      );
    }
  }
  return workingObj;
};
console.log(deleteProp(obj, "how pow"));
console.log(deleteProp(obj, "id"));

/* EXERCISE 12
Write a function called oldestMovie which finds the oldest movie in the provided movies array.
*/
console.log("<<< Exercise 12: >>>");
let moviesArray = [];
const movie = {
  name: "2001: A Space Odyssey",
  release: 1968,
  isGreat: true,
};
const movie1 = Object.assign({}, movie);
movie1.name = "Gladiator";
movie1.release = 2000;
console.log({ movie1 });
const movie2 = Object.assign({}, movie);
movie2.name = "American Gangster";
movie2.release = 2007;
console.log({ movie2 });
moviesArray.push(movie, movie1, movie2);
console.log({ moviesArray });

const oldestMovie = (array) => {
  let resultArray = [];
  let oldestMovieYear = array[0].release;
  let oldestMovieName = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i].release < oldestMovieYear) {
      array[i].release = oldestMovieYear;
      oldestMovieName = array[i].name;
      console.log(array[i].name);
      console.log({ oldestMovieName });
    }
    console.log({ oldestMovieName });
    resultArray.push(oldestMovieName, oldestMovieYear);
    return resultArray;
  }
};
console.log(oldestMovie(moviesArray));

/* EXERCISE 13
Write a function called countMovies which returns the number of movies contained 
in the provided movies array.
/* EXERCISE 14
Write a function called onlyTheTitles which creates an array with just the titles of 
the movies contained in the provided movies array.
*/

const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",

    Year: "2001",

    imdbID: "tt0120737",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Return of the King",

    Year: "2003",

    imdbID: "tt0167260",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings: The Two Towers",

    Year: "2002",

    imdbID: "tt0167261",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },

  {
    Title: "Lord of War",

    Year: "2005",

    imdbID: "tt0399295",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },

  {
    Title: "Lords of Dogtown",

    Year: "2005",

    imdbID: "tt0355702",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },

  {
    Title: "The Lord of the Rings",

    Year: "1978",

    imdbID: "tt0077869",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },

  {
    Title: "Lord of the Flies",

    Year: "1990",

    imdbID: "tt0100054",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },

  {
    Title: "The Lords of Salem",

    Year: "2012",

    imdbID: "tt1731697",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },

  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",

    Year: "1984",

    imdbID: "tt0087365",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },

  {
    Title: "Lord of the Flies",

    Year: "1963",

    imdbID: "tt0057261",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },

  {
    Title: "The Avengers",

    Year: "2012",

    imdbID: "tt0848228",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },

  {
    Title: "Avengers: Infinity War",

    Year: "2018",

    imdbID: "tt4154756",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },

  {
    Title: "Avengers: Age of Ultron",

    Year: "2015",

    imdbID: "tt2395427",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },

  {
    Title: "Avengers: Endgame",

    Year: "2019",

    imdbID: "tt4154796",

    Type: "movie",

    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];
console.log("<<< Exercise 13 & Exercise 14: >>>");
const countMovies = (array) => {
  let allTitles = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].Title !== undefined) {
      allTitles.push(array[i].Title);
    }
  }
  console.log({ allTitles });
  return `There are ${allTitles.length} movie titles listed, and here are they: ${allTitles}`;
};
console.log(countMovies(movies));

/* EXERCISE 15
Write a function called onlyInThisMillennium which returns only the movies produced in 
this millennium from the provided movies array.
*/
console.log("<<< Exercise 15: >>>");
const onlyInThisMillennium = (array) => {
  let thisMillenniumMovies = [];
  for (let movie of array) {
    if (movie.Year > 1999) {
      thisMillenniumMovies.push(movie.Title, movie.Year);
    }
  }
  console.log({ thisMillenniumMovies });
  return `These are all the movies released this millenium, 
  and their corresponding release date: ${thisMillenniumMovies}`;
};
console.log(onlyInThisMillennium(movies));

/* EXERCISE 16
Write a function called getMovieById which receives an id as a parameter and returns the 
movie with the given id from the provided movies array.
*/
console.log("<<< Exercise 16: >>>");
const getMovieById = (movies, id) => {
  let movieId = "";
  for (let movie of movies) {
    if (id === movie.imdbID) {
      movieId = movie.Title;
    }
  }
  return movieId
    ? `${movieId} has the inputted id`
    : `There is no movie that has the inputted id`;
};
console.log(getMovieById(movies, "tt4154796"));
console.log(getMovieById(movies, "tt41547a6"));

/* EXERCISE 17
Write a function called sumAllTheYears which returns the sum of all the years in which 
the movies in the provided movies array have been produced.
*/
console.log("<<< Exercise 17: >>>");
const sumAllTheYears = (array) => {
  let sum = 0;
  for (let movie of array) {
    if (movie.Title !== undefined) {
      sum += Math.floor(movie.Year);
    }
  }
  return `${sum} is the result of adding all the release years for the movies in our database`;
};
console.log(sumAllTheYears(movies));

/* EXERCISE 18
Write a function called searchByTitle which receives a string as a parameter and returns 
all the movies in the provided movies array which contain that string in the title.
*/
console.log("<<< Exercise 18: >>>");
const searchByTitle = (string) => {
  let allSearchedMovies = [];
  for (let movie of movies) {
    if (movie.Title.includes(string)) {
      allSearchedMovies.push(movie.Title, movie.imdbID);
    }
  }
  return allSearchedMovies;
};
console.log(searchByTitle("e of"));

/* EXERCISE 19
Write a function called searchAndDivide which receives a string as a parameter and returns an object;
this object should contain an array called match, made by all the movies from the provided 
movies array which contain the given string in the title,
and another array unmatch with all the remaining ones.
*/
console.log("<<< Exercise 19: >>>");
const searchAndDivide = (string) => {
  const obj = {
    match: [],
    unmatch: [],
  };
  for (let movie of movies) {
    if (movie.Title.includes(string)) {
      obj.match.push(movie);
    } else {
      obj.unmatch.push(movie);
    }
  }
  return obj;
};
console.log(searchAndDivide("vengers"));

/* EXERCISE 20
Write a function called "removeIndex" which receives a number as a parameter and returns 
the provided movies array without the element in the given position.
*/
console.log("<<< Exercise 20: >>>");
const removeIndex = (nr) => {
  let removedMovie = [];
  for (let i = 0; i < movies.length; i++) {
    if (nr === i) {
      removedMovie.push(movies[i]);
      delete movies[i];
    }
  }
  console.log({ removedMovie });
  return movies;
};
console.log(removeIndex(2));
