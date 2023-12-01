//Normal Function
function greet(name) {
  console.log("Normal Function :: Hello", name);
}
greet("Roger Federer");

//Function Expression - Anonymous Function
let greetFuncExpr = function (name) {
  console.log("Function Expression :: Hello", name);
};
greetFuncExpr("Roger Federer");

//Fat-Arrow Function - with parameter
let greetArrowFun = (name) => {
  console.log("Arrow Function :: Hello", name);
};
greetArrowFun("Roger Federer");
let greetArrowFunctionSimplified = (name) =>
  console.log("Arrow Function - Simplified :: Hello", name);
greetArrowFunctionSimplified("Roger Federer");

//Fat-Arrow Function - with multiple parameter
let addition = (a, b) => {
  return a + b;
};
console.log("1. Addition :- ", addition(10, 2));

//Fat-Arrow Function - with multiple parameter - simplified
let additionSimp = (a, b) => a + b;
console.log("2. Addition :- ", additionSimp(10, 2));
