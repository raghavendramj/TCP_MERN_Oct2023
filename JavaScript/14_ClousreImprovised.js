function employeeSalary(initialSalary) {
  var salary = initialSalary;

  function changeSalary(amountToChange) {
    salary += amountToChange;
    console.log("Current Salary is :- ", salary);
  }
  return {
    raise: function (value) {
      console.log(".... Salary is raised by ", value);
      changeSalary(value);
    },
    reduce: function (value) {
      console.log("... Salary is reduced by ", value);
      changeSalary(-value);
    },
  };
}

var object = employeeSalary(1000);
// console.log("object -> ", object);
object.raise(150);
object.reduce(500);
