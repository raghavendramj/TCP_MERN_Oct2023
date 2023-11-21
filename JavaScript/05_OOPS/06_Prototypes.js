function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
}
var person = new Person("John", "Doe");
console.log("1. Person -> ", person);

Person.prototype.nationality = "Indian"; //Adding a variable to prototype
console.log("2. Person -> ", person);
console.log("Property person.nationality -> ", person.nationality);

Person.prototype.greet = function () {
  //Adding a function to prototype
  var msg = "Hi, I'm " + this.firstName + " " + this.lastName + "!";
  console.log(msg);
  return msg;
};

var adam = new Person("Adam", "Smith");
console.log("adam -> ", adam);
console.log("Property adam.nationality -> ", adam.nationality);
adam.greet();
person.greet();
