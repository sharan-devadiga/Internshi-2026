// let name = "Priya ";
// document.getElementById("par").innerHTML = "Hello" + name;

// let , var, const are the three ways to declare a variable in JavaScript.

// let name = "Dinesh"; //using let
// name = "Pawan";

// var last_name = " R"; // using var
// last_name = " Prakash";

// var full_name = name + last_name; //concatinating the string

// const pie = 3.14; //using const
// pie = 1.1; //const is not be changed

// console.log("Pie" + pie);
// console.log("My Name Is " + full_name);

//Arithmaetic Operators

// let a = 10;
// let b = 20;

// console.log("Addition", a + b);
// console.log("Subtraction", a - b);
// console.log("Multiplication", a * b);
// console.log("Division", a / b);
// console.log("Modulus", a % b);
// console.log("Increment", ++a);
// console.log("Decrement", --b);

//Assignment Operators

// let x = 10;
// x += 5;

// console.log("X Value: " + x);

// let a = 12; //Integer
// let b = "12"; //String

// if (a === b) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// let age = 21;
// let hasId = false;

// if (age >= 18 && hasId) //Logical AND
// {
//   console.log("Entry Allowed");
// } else {
//   console.log("Not Allowed");
// }

// if (age >= 18 || hasId) //Logical OR
// {
//   console.log("Entry Allowed");
// } else {
//   console.log("Not Allowed");
// }

// //Logical NOT
// let isLoggedIn = true;

// if (!isLoggedIn) {
//   console.log("User Not Logged In");
// } else {
//   console.log("User Logged In");
// }

// //Data Types In Javascript
// //Number Data Type
// let num = 10;
// console.log("Number Data Type:", num);

// //Number Data Type
// let grams = 10.5;
// console.log("Number(using Float) Data Type:", grams);

// //String Data Type
// let color = "Yellow";
// console.log("String Data Type:", color);

// //Boolean Data Type
// let isprime = true; //true and false
// console.log("Boolean Data Type:", isprime);

// //Null Data Type
// let zero = null;
// console.log("Null Data Type:", zero);

// //Undefined Data Type
// let notdefined = undefined;
// console.log("undefined Data Type:", notdefined);

//Objects in Javascript
// const person = {
//   firstname: "John", //Key Value Pair
//   lastname: "Doe",
//   age: 21,
// };
// // console.log(person.firstname);

// //Array in Javascript
// const cars = ["Saab", "Volvo", "BMW"];

// //printing the value in array structure
// console.log(cars);

// //Accessing Particular Element using Index
// console.log(cars[0]);
// console.log(cars[5]);

// //Printing the values using for loop
// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i]);
// }

// const date = new Date("2026-07-08");
// const date = new Date();
// console.log(date);

//Function Without Parameter
// function greet() {
//   console.log("Welcome");
// }
// greet();

// //Function With Parameter
// function add(a, b) {
//   console.log(a + b);
// }
// add(10, 20);

// //Function with Return Value
// function multiply(a, b) {
//   return a * b;
// }
// let result = multiply(5, 4);
// console.log(result);

// //Anonymous Function
// let message = function () {
//   console.log("Hello Students");
// };
// message();

// //Arrow Function Es6
// const addition = (a, b) => {
//   console.log(a + b);
// };
// addition(30, 40);

//1.Global Scope
// let college = "ABC College";

// const showCollege = () => {
//   console.log(college);
// };
// showCollege();

// //2.Local Scope
// const student = () => {
//   let name = "Sharan";
//   console.log(name);
// };
// student();
// // console.log(name); // Error

// const cars = ["saab", "Bmw", "volvo"];
// console.log(cars);

// //Join Method
// console.log(cars.join("cars")); //Any Special char and strings

// //pop() method
// console.log(cars.pop());

// //push() method
// console.log(cars.push("Suzuki"));
// console.log(cars);

//Switch Statement

// let days = "sat";

// switch (days) {
//   case "Monday":
//     console.log("Today Is Monday");
//     break;
//   case "Tuesday":
//     console.log("Today Is Tuesday");
//     break;
//   case "Wed":
//     console.log("Today Is Wed");
//     break;
//   case "Thr":
//     console.log("Today Is THR");
//     break;
//   default:
//     console.log("No Day Found");
//     break;
// }

// const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// const passwordRegex =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// const phoneRegex =
//   /^(\+1[-. ]?)?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

// let word = "Hello World";
// console.log(word);

// //Search Method
// console.log(word.search("o"));

// //Replace Method
// console.log(word.replace("World", "goodmorning"));

// try {
//   alert("Welcome Guest");
// } catch (error) {
//   console.log(error);
// }

// try {
//   console.log("Hello");
// } catch (error) {
//   console.log("This is the error:", error);
// }

// let myArray = ["Apple", "banana", "orange"];

// // myArray.map(() => {});   syntax

// myArray.map((item) => {
//   console.log(item);
// });

//Destructuring using an Array
// let numbers = [1, 2, 3, 4];

// let [one, two, three, four] = numbers;

// console.log(one, two, three, four);

// console.log(one, four);

// //Object Destructuring
// let person = { name: "Dinesh", age: 35, job: "SDE" };
// let { name, age, job } = person;
// // console.log(name, age, job);
// console.log("Name:", name);
// console.log("Age:", age);
// console.log("job:", job);

// //Spread Operator
// let fruits = ["Apple", "banana", "Mango"];

// let newFruits = [...fruits];

// console.log(newFruits);

// //Merge Both Array Using Spread Op
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let arr3 = [...arr1, ...arr2];
// console.log(arr3);

// //Add Element To an Array using Spread Op
// let numbers = [9, 10, 11];
// let result = [8, ...numbers, 12];
// console.log(result);

// //Spread Op using Objects
// let student = {
//   name: "Sharan",
//   age: 21,
// };
// let student2 = { ...student };
// console.log(student2);

// //Merge The object
// let personal = {
//   name: "Suresh",
// };

// let details = {
//   age: 21,
//   City: "Mangalore",
// };
// let user = { ...personal, ...details };
// console.log(user);

// //Spread Op in Functions--
// let sum = (a, b, c) => {
//   return a + b + c;
// };

// let num = [10, 20, 30];
// console.log(sum(...num));

// let digits = [1, 2, 3, 4, 5, 6];
// let [...rest] = digits;
// console.log(rest);

// //Ternary  Op
// let x = 10;
// // condition? "Statement 1":"statement 2"
// x === 0 ? console.log("True") : console.log("False");
