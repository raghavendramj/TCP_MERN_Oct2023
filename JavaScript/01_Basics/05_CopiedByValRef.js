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

var citiesA = ["Bangalore", "Chennai", "Mumbai", "Kolkata", "Delhi"];
var citiesB = citiesA;

console.log("-----------------------------------------------------");
console.log("1. citiesA :- ", citiesA);
console.log("1. citiesB :- ", citiesB);

citiesB.pop(); //Impacts both the variables -> pass by reference
citiesA = ["Bangalore", "Chennai", "Mumbai"]; //redeclaration :- changes the reference of citiesA

console.log("-----------------------------------------------------");
console.log("2. citiesA :- ", citiesA);
console.log("2. citiesB :- ", citiesB);


