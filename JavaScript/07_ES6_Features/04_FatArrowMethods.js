//[1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25] -> 55

function oldTimes(arr) {
  let summation = 0;
  let squareArray = new Array();
  for (let i = 0; i < arr.length; i++) {
    let eachSquare = arr[i] * arr[i];
    squareArray.push(eachSquare);
    summation = summation + eachSquare;
  }

  console.log("1. Initial Array :- ", arr);
  console.log("2. Squared Array :- ", squareArray);
  console.log("3. Summation :- ", summation);
}

// oldTimes([1, 2, 3, 4, 5]);

function getSummation(arr) {
  let result = arr.map((a) => a * a);
  console.log("1. Arrow Method map :: Squared Array :- ", result);
  result = result.reduce((a, b) => a + b);
  console.log("2. Arrow Method reduce :: Summation :- ", result);

  console.log(
    "3. Simplified code :- ",
    arr.map((a) => a * a).reduce((a, b) => a + b)
  );
}
// getSummation([1, 2, 3, 4, 5]);

function mapExample() {
  let names = ["dhoni", "kohli", "rohith", "zaheer", "sachin"];
  let namesLengthArray = new Array();
  for (let name of names) {
    let nameLen = name.length;
    namesLengthArray.push(nameLen);
  }
  console.log("2.1. ES5 way :- ", namesLengthArray);

  let extractLength = (name) => name.length;
  let lenArr = names.map(extractLength);
  console.log("2.2. ES6 way :- ", lenArr);
}
// mapExample();

function filterFunctionExample() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let oddNumbers = new Array();
  for (let eachNum of numbers) {
    if (eachNum % 2 != 0) {
      oddNumbers.push(eachNum);
    }
  }
  console.log("1. ES5 Odd Number :- ", oddNumbers);

  let isOddNumFun = (number) => number % 2 != 0;
  let oddNumbersES6 = numbers.filter(isOddNumFun);
  console.log("2. ES6 Odd Number :- ", oddNumbersES6);

  let isEvenNumFun = (number) => number % 2 == 0;
  let evenNumbersES6 = numbers.filter(isEvenNumFun);
  console.log("3. ES6 Odd Number :- ", evenNumbersES6);
}
// filterFunctionExample();

function reduceExample() {
  let numbers = [1, 2, 3, 4, 5];
  let sum = 0;
  for (let eachNumber of numbers) {
    sum = sum + eachNumber;
  }
  console.log("1. ES5 Sum of numbers :- ", sum);

  let addReducer = (accumulator, currentValue) => {
    console.log(`Accumulator :- ${accumulator} Current value  ${currentValue}`);
    return accumulator * currentValue;
  };
  let addReducer2 = (sum, eachNumber) => {
    console.log(`Accumulator :- ${sum} Current value  ${eachNumber}`);
    return sum * eachNumber;
  };
  let es6Sum = numbers.reduce(addReducer2);
  console.log("2. ES6 Sum of numbers  :- ", es6Sum);
}

// reduceExample();

function practicalReduce() {
  let products = [
    {
      catergory: "Mobile",
      name: "IPhone 14",
      price: 150,
    },
    {
      catergory: "Mobile",
      name: "Samsung S22",
      price: 80,
    },
    {
      catergory: "Mobile",
      name: "Redmi 15 Pro Max",
      price: 130,
    },
    {
      catergory: "Television",
      name: "Sony A84",
      price: 550,
    },
    {
      catergory: "Television",
      name: "LG C2",
      price: 450,
    },
  ];
  // Ask -> Sum of the prices of Mobile phones > $100
}
