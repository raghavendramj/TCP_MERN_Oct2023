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
}

mergeArrays();
