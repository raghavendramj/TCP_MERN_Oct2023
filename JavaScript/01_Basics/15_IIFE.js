// Immediately Invoked Function Expression

//Normal Function
function add(a, b) {
  return a + b;
}
//add() function to the window global object
console.log(window.add);

var counter = 10; //Variable -> Raghav
console.log(window.counter); // 10

//Global variables pollution ->
counter = function (a, b, c) {
  return a + b + c;
};

//Function Expression
var difference = function (a, b) {
  return a - b;
};
difference(12, 5);

//The following expression is called an immediately invoked function expression (IIFE)
// because the function is created as an expression and executed immediately:

//This is the general syntax for defining an IIFE:

(function () {
  //... function body!
})();

(function () {
  var counter = 10;
  console.log("Value of counter :- ", counter);
})();


function calculatorUtil() {
    //Outer function
    var res = 0; //Outer function's variable...
    function addition(a, b) {
      //Inner function - 01,
      res = a + b;
      return res;
    }
    function multiply(a, b) {
      //Inner function - 02
      res = a * b;
      return res;
    }
  
    return {
      add: addition,
      prod: multiply,
    };
  }
  
  var calculator = calculatorUtil();
  