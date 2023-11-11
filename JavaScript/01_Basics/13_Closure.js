//A closure gives you access to an outer function's scope from an inner function.

function init1() {
  //Starts here
  var name = "VSCode";
  function displayName() {
    console.log("Name of the editor is :- ", name);
  }
  displayName();
  //Ends here
}
// init1();

function init2() {
  //Outer function
  var name = "VSCode";
  function displayName() {
    //Inner function
    //access to an outer function's scope from an inner function.
    console.log("Name of the editor is :- ", name);
  }
  return displayName;
}
var returnedValue = init2();
// returnedValue(); //still able to access 'name' varibale with the help of closure scope

function employeeSalary(initialSalary) {
  //Outer function..
  var salary = initialSalary;

  function changeSalary(amountToChange) {
    //Inner function.. salary is kept and this concept is called closure....
    salary += amountToChange;
    console.log("Salary is :- ", salary);
  }
  return changeSalary;
}

var keshavSalary = employeeSalary(1000);

keshavSalary(+500); //salary is getting retained inside a closure's scope
keshavSalary(-250);
keshavSalary(-105);
