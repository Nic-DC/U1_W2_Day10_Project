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
  let oldestMovieYear = 0;
  let oldestMovieName = "";
  for (let i = 1; i < array.length; i++) {
    if (array[i - 1].release < array[i].release) {
      console.log(array[i - 1].release);
      console.log(array[i].release);
      oldestMovieYear = array[i - 1].release;
      oldestMovieName = array[i - 1].name;
      // } else if (array[0] > oldestMovieYear) {
      //   oldestMovie = array[0].release;
      //   oldestMovieName = array[0].name;
      // }
    }
    resultArray.push(oldestMovieName, oldestMovieYear);
    return resultArray;
  }
};
console.log(oldestMovie(moviesArray));
/* EXERCISE 13
Write a function called countMovies which returns the number of movies contained 
in the provided movies array.
*/
console.log("<<< Exercise 13: >>>");

/* EXERCISE 14
Write a function called onlyTheTitles which creates an array with just the titles of 
the movies contained in the provided movies array.
*/
console.log("<<< Exercise 14: >>>");

/* EXERCISE 15
Write a function called onlyInThisMillennium which returns only the movies produced in 
this millennium from the provided movies array.
*/
console.log("<<< Exercise 15: >>>");

/* EXERCISE 16
Write a function called getMovieById which receives an id as a parameter and returns the 
movie with the given id from the provided movies array.
*/
console.log("<<< Exercise 16: >>>");

/* EXERCISE 17
Write a function called sumAllTheYears which returns the sum of all the years in which 
the movies in the provided movies array have been produced.
*/
console.log("<<< Exercise 17: >>>");

/* EXERCISE 18
Write a function called searchByTitle which receives a string as a parameter and returns 
all the movies in the provided movies array which contain that string in the title.
*/
console.log("<<< Exercise 18: >>>");

/* EXERCISE 19
Write a function called searchAndDivide which receives a string as a parameter and returns an object;
this object should contain an array called match, made by all the movies from the provided 
movies array which contain the given string in the title,
and another array unmatch with all the remaining ones.
*/
console.log("<<< Exercise 19: >>>");

/* EXERCISE 20
Write a function called "removeIndex" which receives a number as a parameter and returns 
the provided movies array without the element in the given position.
*/
console.log("<<< Exercise 20: >>>");
