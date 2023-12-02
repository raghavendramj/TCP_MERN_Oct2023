let subtract = (a, b) => {
  return a - b;
};

let add = (a, b) => {
  return a + b;
};

let multiply = (a, b) => {
  return a * b;
};

let calculator = (a, b, operator) => {
  let result = operator(a, b);
  console.log("Result is :- ", result);
};

//Usecase :- Multiplication -> Addition -> Subtraction
let perforMultipleOperation = (a, b) => {
  calculator(a, b, (a, b) => {
    calculator(a, b, (a, b) => {
      calculator(a, b, (a, b) => {
        return a * b; //Multipliaction
      });
      return a + b; //Addition
    });
    return a - b; //Subtraction
  });
};

let perforMultipleOperation2 = (a, b) => {
  calculator(a, b, (a, b) => {
    calculator(a, b, (a, b) => {
      calculator(a, b, (a, b) => {
        return a * b;
      });
      return a + b;
    });
    return a - b;
  });
};
perforMultipleOperation(45, 12);

// btn.addEventListener("click", function () {
//   console.log("Clicked!");
// });
