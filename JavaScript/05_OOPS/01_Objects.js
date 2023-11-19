//Object creation - using constructor function!
function Person(name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
}
var person = new Person("Supreeth Raj", 22, "supreeth.raj@gmail.com");

function printObjectDetails(obj) {
  console.log("--------------> Details about object are <--------------");
  for (var eachProperty in obj) {
    console.log("obj[", eachProperty, "] :- ", obj[eachProperty]);
  }
}

// person.phone = 45545;
// person["city"] = "Bangalore";
// printObjectDetails(person);

// delete person["email"];
// delete person.age;
printObjectDetails(person);

function objectOperations() {
  //Add a new property to the object
  person.phone = 123456; //DOT notation
  person["city"] = "Bangalore"; //Array-like notation
  printObjectDetails(person);

  console.log("Keys in object are :- ", Object.keys(person));

  //Check for existence
  if ("phone" in person)
    console.log("Does object contain property phone? :- ", "phone" in person);

  console.log("Is phone a property in person : ", "phone" in person);
  console.log("Is state a property in person : ", "state" in person);

  //Removing properties from an object
  delete person["email"];
  delete person.age;

  printObjectDetails(person);
}
objectOperations();
