//Normal function - without parameters
function sayHello() {
  console.log("Welcome to JavaScript");
}
sayHello();

//Normal function - with parameters
function addition(a, b) {
  var sum = a + b;
  console.log("Result addition :- ", sum);
  return sum;
}
addition(10, 20);
console.log("***************** Addition :- ", addition);

//Function Expression
var subtraction = function (a, b) {
  var sum = a - b;
  console.log("Result subtraction:- ", sum);
  return sum;
};

console.log("***************** Subtraction :- ", subtraction);

subtraction(24, 13);

console.log("\n-----------------------------------------");
function operation(a, b, operatorFunction) {
  var result = operatorFunction(a, b);
  console.log("operation's result:- ", result);
  return result;
}

var a = 10;
var b = 6;

operation(a, b, subtraction);
operation(a, b, addition);
