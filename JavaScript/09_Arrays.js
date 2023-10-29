function arraysInrtro() {
  var arr1 = ["Siman", "Preeti", "Balaji", "Nahar", "Usha"];

  console.log("1st element :- ", arr1[0]);
  console.log("Size :-  :- ", arr1.length);
  console.log("Last element :- ", arr1[arr1.length - 1]);
  console.log("All elements :- ", arr1);

  var arr2 = ["Sahil", "Pavan", "Neeraj", "Saurbh"];
  var arr3 = ["Jasmeen", "Aparana", "Sukhbir"];
  var arr4 = [1, 2, 3, 4, 5];
  var arr5 = [true, true, false, true];
  var arr6 = ["Raghav", 10, true, { x: 1, y: 12 }, undefined, null, ["a", "b"]];
}
// arraysInrtro();

function printElements(arr) {
  console.log("Length  :- ", arr.length, "-> Array :- ", arr);
}

//Built-in function is push() and pop()
function addRemoveElementsFromEnd() {
  var students = ["Siman", "Preeti"];
  printElements(students);
  students.push("Balaji"); //adds element at the end
  students.push("Usha"); //adds element at the end

  console.log("***************** After addition from end ***************");
  printElements(students);

  students.pop();
  students.pop();
  students.pop();

  console.log("***************** After deletion from end ***************");
  printElements(students);
}
// addRemoveElementsFromEnd();

//Built-in function is unshift() and shift()
function addRemoveElementsFromBeggining() {
  var students = ["Usha", "Sukhbir"];
  printElements(students);
  students.unshift("Saurabh");
  students.unshift("Aparna");
  console.log("***************** After addition from start ***************");
  printElements(students);

  students.shift();
  students.shift();
  students.shift();
  console.log("***************** After deletion from start ***************");
  printElements(students);
}
// addRemoveElementsFromBeggining();

function deleteMethod() {
  var students = ["Sahil", "Pavan", "Neeraj", "Saurbh"];
  printElements(students);
  delete students[1];
  delete students[2];
  console.log("***************** After delete method ***************");
  printElements(students);
}
// deleteMethod();

function arraysJoin() {
  var students = ["Sahil", "Pavan", "Neeraj", "Saurabh"];
  console.log("students.join(,) -> ", students.join(","));
  console.log("students.join(<->) -> ", students.join(" <-> "));
}
// arraysJoin();

function mergeArrays() {
  var arr1 = ["Agam", "Aishwarya"];
  var arr2 = ["Jeevan", "Harshith"];
  var clubbedArrays = arr1.concat(arr2);
  console.log("1. Two arrays :- ", clubbedArrays);

  var arr3 = ["Prashanth", "Chaithra"];
  clubbedArrays = arr1.concat(arr2).concat(arr3);
  console.log("2. Two arrays :- ", clubbedArrays);

  arr3.s;
}

// mergeArrays();

function spliceMethods() {
  //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
  //1 -> start — The zero-based location in the array from which to start removing elements.
  //2 -> deleteCount — The number of elements to remove.
  //3 -> and afterwards -> (element(s) that needs to be added);

  //CASE - 01 :- Only Removal
  console.log("------------- CASE - 01 :- Only Removal --------------------");
  var cities = ["Bangalore", "Mysore", "Chennai", "Mumbai", "Kolkota"];
  console.log("Initial cities:-", cities);

  var removedCities = cities.splice(1, 2);
  console.log("After Removal cities:-", cities);
  console.log("After Removal removedCities:-", removedCities);

  //Case-02: only Addition
  console.log("\n------------- Case-02: only Addition --------------------");
  cities = ["Bangalore", "Mysore", "Chennai", "Mumbai"];
  console.log("Initial cities:-", cities);

  cities.splice(2, 0, "Lucknow", "MP");
  console.log("After addition :-", cities);

  //Case-03: Both Addition and Removal
  console.log(
    "\n---------- Case-03: Both Addition and Removal ---------------"
  );
  cities = ["Bangalore", "Mysore", "Chennai", "Mumbai", "Kolkota"];
  console.log("Initial cities:-", cities);
  console.log(
    "Question :- Remove 'Mysore', 'Chennai', 'Mumbai' and add 'Kerala', 'Gujurat'?"
  );

  //Question :- Remove "Mysore", "Chennai", "Mumbai" and add "Kerala", "Gujurat"
  cities.splice(1, 3, "Kerala", "Gujurat");
  console.log("After Both Addition and Removal :-", cities);
}

// spliceMethods();

function sliceMethod() {
  var cities = ["Bangalore", "Mysore", "Chennai", "Mumbai"];
  //Returns a copy of a section of an array. For both start and end,
  //a negative index can be used to indicate an offset from the end of the array.
  //For example, -2 refers to the second to last element of the array.

  //first param -> start-index,
  //second param -> end-index(exclusive)
  console.log("cities.slice(0, 3) :-", cities.slice(0, 3));
  console.log("cities.slice(0, -1) :-", cities.slice(0, -1)); // => (0, 4-1) => (0, 3)
  console.log("cities.slice(-3, -1) :-", cities.slice(-3, -1)); // => (4-3, 4-1) => (1, 3)
  console.log("cities.slice(-1, -2) :-", cities.slice(-1, -2)); // => (4-1, 4-2) => (3, 2)
}
// sliceMethod();

//If beginIndex or endIndex is negative then it is treated as
// beginIndex = str.length + beginIndex
// endIndex   = str.length + endIndex

function forAndforOfLoop() {
  console.log("********************* normal for  loop *********************");
  var cities = ["Bangalore", "Mysore", "Chennai", "Mumbai"];
  for (var i = 0; i < cities.length; i++) {
    console.log("Each element - for loop :- ", cities[i]);
  }

  console.log("\n********************* for of loop *********************");
  for (var eachElement of cities) {
    console.log("Each element - for of loop :- ", eachElement);
  }
}

forAndforOfLoop();
