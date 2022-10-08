// JS Functions

/* EXERCISE 1
Write a function called dice; it should randomize an integer number between 1 and 6.
*/
console.log("<<< Exercise 1: >>>");
const dice = () => {
  return Math.floor(Math.random() * 6 + 1);
};
console.log(dice());
console.log(dice());
console.log(dice());

/* EXERCISE 2
Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.
*/
console.log("<<< Exercise 2: >>>");
const whoIsBigger = (nr1, nr2) => {
  return nr1 > nr2 ? nr1 : nr2;
};
console.log(whoIsBigger(2343, 5745754));
console.log(whoIsBigger(2343, -5745754));

/* EXERCISE 3
Write a function called splitMe which receives a string as a parameter and returns an array 
with every word in that string.
Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
console.log("<<< Exercise 3: >>>");
const splitMe = (string) => {
  return string.split(" ");
};

console.log(splitMe("I love coding"));

/* EXERCISE 4
Write a function called deleteOne which receives a string and a boolean as parameters.
If the boolean value is true it should return the string without the first letter, 
otherwise it should remove the last one from it.
*/
console.log("<<< Exercise 4: >>>");
const deleteOne = (string, bool) => {
  return bool ? string.slice(1) : string.slice(0, string.length - 1);
};
console.log(deleteOne("I love coding", true));
console.log(deleteOne("I love coding", false));

/* EXERCISE 5
Write a function called onlyLetters which receives a string as a parameter and returns 
it removing all the digits.
Ex.: onlyLetters("I have 4 dogs") => returns "I have dogs"
*/
console.log("<<< Exercise 5: >>>");
const onlyLetters = (string) => {
  return string.replace(/[0-9]/g, "");
};
console.log(onlyLetters("2 I have 4 dogs"));

/* EXERCISE 6
Write a function called isThisAnEmail which receives a string as a parameter and 
returns true if the string is a valid email address.
*/
console.log("<<< Exercise 6: >>>");
const isThisAnEmail = (string) => {};

/* EXERCISE 7
Write a function called whatDayIsIt that should return the current day of the week.
*/
console.log("<<< Exercise 7: >>>");
const whatDayIsIt = () => {};
console.log(whatDayIsIt());
/* EXERCISE 8
Write a function called rollTheDices which receives a number as a parameter.
It should invoke the dice() function defined in Ex1 the specified amount of times,
and return an object containing a sum property holding the sum of all values extracted
and a values array containing the single values of the dicerolls themselves.
Example: RollTheDices(3) => returns {
sum: 10
values: [3, 3, 4]
}
*/
console.log("<<< Exercise 8: >>>");

/* EXERCISE 9
Write a function called howManyDays which receives a date as a parameter 
and returns the number of days passed since that date.
*/
console.log("<<< Exercise 9: >>>");

/* EXERCISE 10
Write a function called isTodayMyBirthday which should return true if 
today’s your birthday, false otherwise.
*/
console.log("<<< Exercise 10: >>>");
