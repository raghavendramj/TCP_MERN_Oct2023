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

  //1. All Mobile phones
  let allMobilesFilter = (prod) => prod.catergory == "Mobile";
  let moblilesObjs = products.filter(allMobilesFilter);
  console.log("moblilesObjs :- ", moblilesObjs);

  //2. Mobile phones > 100
  let mobilesGt100Filter = (prod) => prod.price > 100;
  let moblilesObjsGt100 = moblilesObjs.filter(mobilesGt100Filter);
  console.log("moblilesObjsGt100 :- ", moblilesObjsGt100);

  let sumReducer = (a, b) => a + b;
  let sumOfPrices = moblilesObjsGt100
    .map((mob) => mob.price)
    .reduce(sumReducer);
  console.log("sumOfPrices :- ", sumOfPrices);

  let sumInOnelineEx1 = products
    .filter((prod) => prod.catergory === "Mobile")
    .filter((prod) => prod.price > 100)
    .map((prod) => prod.price)
    .reduce((acc, cur) => acc + cur);
  console.log("5. Sum of Mobile Price > 100 sumInOneline :- ", sumInOnelineEx1);
}
// practicalReduce();

function sortNumbers() {
  let numbers = [3, 1, 2, 7, 4, 5, 9, 8];
  console.log("Before :- ", numbers);

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] < numbers[j]) {
        let temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
      }
    }
  }
  console.log("Using bubble sort :- ", numbers);

  numbers = [3, 1, 2, 7, 4, 5, 9, 8];
  let ascendingComparator = (a, b) => {
    //console.log("A -> ", a, " B -> ", b);
    return a - b;
  }; //Ascending
  let descendingComparator = (a, b) => b - a; //Descending
  console.log(
    "Using ES6 Features - Ascending :- ",
    numbers.sort(ascendingComparator)
  );
  console.log(
    "Using ES6 Features - Descending :- ",
    numbers.sort(descendingComparator)
  );
}
// sortNumbers();

function findFunctions() {
  let numbers = [3, 1, 2, 7, 4, 5, 9, 8];
  console.log(
    "Gt 7 ",
    numbers.find((num) => num > 7)
  );
}
// findFunctions();

function findFirstFunctions() {
  let numbers = [3, 1, 3, 1, 2, 7, 8, 9];
  console.log(
    "Index of number greater than 7 :- ",
    numbers.findIndex((num) => num > 7)
  );
}
findFirstFunctions();