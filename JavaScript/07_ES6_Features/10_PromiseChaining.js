//Usecase 1 :- Division -> Addition -> Multiplication -> Subtraction

const add = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.length < 2) {
      reject("Unable to perform Addition");
    } else {
      let result = arr[0] + arr[1];
      console.log("Sum is :- ", result);
      resolve(arr);
    }
  });
};

const subtract = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.length < 2) {
      reject("Unable to perform Subtraction");
    } else {
      let result = arr[0] - arr[1];
      console.log("Difference is :- ", result);
      resolve(arr);
    }
  });
};

const multiply = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.length < 2) {
      reject("Unable to perform Multiplication");
    } else {
      let result = arr[0] * arr[1];
      console.log("Product is :- ", result);
      resolve(arr);
    }
  });
};
const division = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.length < 2 && arr[1] != 0) {
      reject("Unable to perform Division");
    } else {
      let result = arr[0] / arr[1];
      console.log("Divsion is :- ", result);
      resolve(arr);
    }
  });
};

let arr = [30, 16];

// Elaborative promise chaining
//Addition - First Promise
let firstPromise = add(arr);

//Subtraction - Second Promise
let secondPromise = firstPromise.then(
  (successArr) => subtract(successArr),
  (err) => console.log("Error", err)
);

//Multiplication - Third Promise
let thirdPromise = secondPromise.then(
  (successArr) => multiply(successArr),
  (err) => console.log("Error", err)
);

//Division - Fourth Promise
let fourthPromise = thirdPromise.then(
  (successArr) => division(successArr),
  (err) => console.log("Error", err)
);

//Handling - Last Promise
fourthPromise.then(
  (successArr) =>
    console.log("Success.... All promises have been completed!", successArr),
  (err) => console.log("Error", err)
);

//One liner promise chaining!
setTimeout(() => {
  add(arr)
  .then(subtract)
  .then(division)
  .then(multiply);
}, 3000);
