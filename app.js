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
const y = 11;

// if (x === 10) {
//   console.log("x is 10");
// } else if (x > 10) {
//   console.log("x is greater than 10");
// } else {
//   console.log("x is less than 10");
// }

// if (x > 5 || y > 10) {
//     console.log("x is more than 5 or y is more than 10");
// }

// if (x > 5 && y > 10) {
//     console.log("x is more than 5 or y is more than 10");
// }

// const x = 10;

// const color = x > 10 ? "red" : "blue";

// console.log(color);

switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is NOT red or blue");
    break;
}

// ----------[ FUNCTIONS ]----------

function addNums(num = 1, num2 = 1) {
  return num1 + num2;
}

const addNums = (num = 1, num2 = 1) => num1 + num2;

console.log(addNumbs(5, 4));

// ----------[ OOP ]----------

// Constructor Function
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     this.getBirthYear = function() {
//         return this.dob.getFullYear();
//     }
//     this.getFullName = function() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
//     return this.dob.getFullName();
// }

// Class
// class Person {
//     constructor() {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }
//     getBirthYear() {
//         return this.dob.getFullYear();
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// // Instantiate Object
// const person1 = new Person("John", "Doe", "4-3-1980");
// const person2 = new Person("Mary", "Smith", "3-6-1970");

// console.log(person1);
// console.log(person2.dob.getFullYear());
// console.log(person1.getBirthYear());
// console.log(person1.getFullYear());

// ELEMENT SELECTORS

// Single Element Selectors
console.log(document.getElementById("my-form"));
console.log(document.querySelector(".container"));
// Multiple Element Selectors
console.log(document.querySelectorAll(".item"));
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("item"));

const items = document.querySelectorAll(".item");
items.forEach((item) => console.log(item));

// MANIPULATING THE DOM
const ul = document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = "Brad";
ul.lastElementChild.innerHTML = "<h1>Hello</h1>";

const btn = document.querySelector(".btn");
// btn.style.background = 'red';

// EVENTS

// Mouse Event
btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target.className);
  document.getElementById("my-form").style.background = "#ccc";
  document.querySelector("body").classList.add("bg-dark");
  ul.lastElementChild.innerHTML = "<h1>Changed</h1>";
});

// Keyboard Event
const nameInput = document.querySelector("#name");
nameInput.addEventListener("input", (e) => {
  document.querySelector(".container").append(nameInput.value);
});

// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

// Listen for form submit
myForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === "" || emailInput.value === "") {
    // alert('Please enter all fields');
    msg.classList.add("error");
    msg.innerHTML = "Please enter all fields";

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement("li");

    // Add text node with input values
    li.appendChild(
      document.createTextNode(`${nameInput.value}: ${emailInput.value}`)
    );

    // Add HTML
    // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = "";
    emailInput.value = "";
  }
}
