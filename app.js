// alert("Hello World");
// console.log("Hello World");
// console.error("This is an error");
// console.warn("This is a warning");

// var, let, const
// const name = "John";
// const age = 30;
// const rating = 4.5;
// const isCool = true;
// const x = null;
// const y = undefined;
// let z;
// console.log(typeof rating);

// ----------[ STRINGS ]----------
// const personName = "John";
// const age = 30;

// // Concatenation
// console.log("My name is " + personName + " and I am " + age);
// // Template String
// const hello = `My name is ${personName} and I am ${age}`;

// const s = "Hello World";

// console.log(s.length);
// property doesn't have (). If it does, it's a method.

// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0, 5).toUpperCase());
// console.log(s.split(""));

// ----------[ ARRAYS ]----------

// arrays - variables that hold multiple values

// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);
// const fruits = ["apples", "oranges", "pears", 10, true];
// console.log(fruits);

// fruits[3] = "grapes";

// fruits.push("mangos");

// fruits.unshift("strawberries");

// fruits.pop();

// console.log(Array.isArray(fruits));

// console.log(Array.isArray("hello"));

// console.log(fruits.indexOf("oranges"));

// console.log(fruits[1]);

// ----------[ Object Pairs ]----------

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     hobbies: ["music", "movies", "sports"],
//     address: {
//         street: "50 main st",
//         city: "Boston",
//         state: "MA"
//     }
// }

// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);

// const { firstName, lastName, address: { city} } = person;

// console.log(firstName);

// person.email = "john@gmail.com";

// console.log(person);

// const todos = [
//     {
//         id: 1,
//         text: "Take out trash",
//         isCompleted: true
//     },
//     {
//         id: 2,
//         text: "Meeting with boss",
//         isCompleted: true
//     },
//     {
//         id: 3,
//         text: "Dentist appointment",
//         isCompleted: false
//     }
// ];

// console.log(todos[1].text);

// ----------[ JSON ]----------

// [
//     {
//        "id": 1,
//        "text": "Take out trash",
//        "isCompleted": true
//     },
//     {
//        "id": 2,
//        "text": "Meeting with boss",
//        "isCompleted": true
//     },
//     {
//        "id": 3,
//        "text": "Dentist appointment",
//        "isCompleted": false
//     }
//  ]

// const todoJSON = JSON.stringify(todos);
// console.log(todoJSON);

// ----------[ LOOPS ]----------

// For
// for (let i = 0; i <= 10; i++) {
//   console.log(`For Loop Number: ${i}`);
// }

// While
// let i = 0;
// while (i < 10) {
//     console.log(`While Loop Number: ${i}`);
//     i++;
// }

// Looping through Arrays
// for (let i = 0; i < todos.length; i++) {
//     console.log(todos[i].text);
//   }

// For
// for (let i = 0; i <= 10; i++) {
//     console.log(`For Loop Number: ${i}`);
//   }

// for(let todo of todos) {
//     console.log(todo.text);
// }

// forEach, map, filter
// todos.forEach(function() {
//     console.log(todo.text);
// });

// const todoText = todos.map(function(todo) {
//     return todo.text;
// });
// console.log(todoText);

// const todoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo) {
//     return todo.text;
// });
// console.log(todoCompleted);

// ----------[ CONDITIONALS ]----------

const x = 20;
const y = 10;

if (x > 5 || y > 10) {
  console.log("x is 10");
} else if (x > 10) {
  console.log("x is greater than 10");
} else {
  console.log("x is less than 10");
}
