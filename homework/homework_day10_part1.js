// JS Basics

/* EXERCISE A
Create a variable called test and assign a string value to it.
*/
const test = "string";

/* EXERCISE B
Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.
*/
const sum = 10 + 20;
console.log({ sum });

/* EXERCISE C
Create a variable called random and assign to it a random number between 0 and 20 
(it should be randomly created at each execution).
*/
let random;
for (let i = 0; i <= Math.floor(Math.random() * 21); i++) {
  const randomNumber = Math.floor(Math.random() * 21);
  random = randomNumber;

  console.log({ random });
  console.log("--- new iteration ---");
}

/* EXERCISE D
Create a variable called me and assign to it an object containing the following 
information: name = your name, surname = your surname, age = your age.
*/
const me = {
  name: "YourName",
  surname: "YourSurname",
  age: 254,
};
console.log({ me });

/* EXERCISE E
Write a piece of code for programmatically removing the age property from the previously create object.
*/
delete me.age;
console.log({ me });

/* EXERCISE F
Write a piece of code for programmatically adding to the me object you defined before an array called skills, 
containing the programming languages you know right now.
*/
me.skills = ["HTML", "CSS", "JavaScipt"];
console.log({ me });

/* EXERCISE G
Write a piece of code for programmatically removing the last skill from the skills array inside the me object.
*/
me.skills.pop();
console.log({ me });
// OR
