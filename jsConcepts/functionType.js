// ----------------------------------------------- First Class or First class citizen---------------------------------------------------

// 1.Example | Assign a function to a variable
const foo = function() {
    console.log("foobar");
 }
 // Invoke it using the variable
 foo();

//  2.Example | Pass a function as an Argument 
// callback function

function sayHello() {
    return "Hello, ";
 }
 function greeting(helloMessage, name) {
   console.log(helloMessage() + name);
 }
 // Pass `sayHello` as an argument to `greeting` function
 greeting(sayHello, "JavaScript!");


 var t = function say () {
     return "hello !!"
 } 

 greeting(t, "JavaScript!");

// 3.return a function

function sayHello() {
    return function() {
       console.log("Hello!");
    }
 }
//  In this example; We need to return a function from another function - We can return a function because we treated function in JavaScript as a value.
 
//  A function that returns a function is called a Higher-Order Function.

// ----------------------------------------------- Higher Order ---------------------------------------------------

// A higher order function is a function that takes a function as an argument, or returns a function.
// Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.
function sayHello() {
    return function() {
       console.log("Hello!");
    }
 }

 function sayHello() {
    return "Hello, ";
 }
 function greeting(helloMessage, name) {
   console.log(helloMessage() + name);
 }
 // Pass `sayHello` as an argument to `greeting` function
 greeting(sayHello, "JavaScript!");

// difference ------------------------------------------------------------

// First class functions are functions that are treated like an object (or are assignable to a variable).

// Higher order functions are functions that take at least one first class function as a parameter, or return at least one first class function.