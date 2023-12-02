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

//Functions are called as first level citizens
calculator(41, 12, subtract);
calculator(41, 12, add);
calculator(41, 12, multiply);
