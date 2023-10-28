// Value Types:- Copied By Value
// Number
// String
// Boolean
// Symbol
// undefined
// null

// Reference Types:- Copied by reference
// Object
// Function
// Array

var a = 10;
var b = a;
a = 20;

console.log("A :- ", a);
console.log("B :- ", b);
console.log("------------------------------------");

var fruits = ["Apple", "Banana"];
var veggies = fruits;

console.log("fruits :- ", fruits);
console.log("veggies :- ", veggies);

console.log("------------------------------------");
// fruits = ["Grapes"]; //Complete re-assignment

fruits.push("Orange");

console.log("fruits :- ", fruits);
console.log("veggies :- ", veggies);
