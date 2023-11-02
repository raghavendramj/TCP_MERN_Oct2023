//Ask :- Calculator Object with all features...

var calculator = (function () {
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
})();

calculator.add(12, 23); //35
calculator.prod(5, 6); //30
