//Object creation...

function simplifyObjectCreation() {
  var make = 2022;
  var model = "Innova";
  var brand = "Toyota";

  var toyotaCar = {
    make: make,
    model: model,
    brand: brand,
  };

  console.log("1. Car object :- ", toyotaCar);

  var make = 2025;
  var model = "Innova";
  var brand = "HyCrossCrysta";
  var toyotaCar2 = {
    make,
    model,
    brand,
  };
  console.log("2. Car object :- ", toyotaCar2);
}

// 1. Factory Function
function factoryFunction() {
  function createCircle(radius, diameter, areaSize) {
    return {
      radius, // ==> radius [(property)radius: any] : radius [(local var) radius: number] ==> radius: 4
      diameter, //It takes local variable name as its property name,
      area: areaSize, // local variable name is different from property name,
      draw: function () {
        console.log("Factory function...", this.radius);
      },
    };
  }

  var circleOne = createCircle(4, 16, 12);
  console.log("1. circleOne :- ", circleOne);

  var circleTwo = createCircle(12, 144, 45);
  console.log("2. circleTwo :- ", circleTwo);
}
// factoryFunction();

//2. Constructor Function.
function constructorFunction() {
  function Person(nameVariable, ageVariable, email) {
    // {} -> Object.create({})
    // {this is linked}
    this.name = nameVariable;
    // {name: 'Raghavendra'}
    this.age = ageVariable;
    // {name: 'Raghavendra', age: 30}
    this.email = email;
    // {name: 'Raghavendra', age: 30, email: raghav@gmail.com}
    // returns this -> name, age and email {name: 'Raghavendra', age: 30, email: raghav@gmail.com}
  }

  // 1. new -> create an empty object {}
  // 2. it will set that empty object to that current object
  // 3. returns the object from the function
  // The above 3 steps happens in sequence and automatically

  var raghav = new Person("Raghavendra", 30, "raghav@gmail.com");
  console.log("1. First object :- ", raghav);

  function Employee(id, fname, lname, city, email) {
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.city = city;
    this.fullName = function () {
      return this.fname + " " + this.lname;
    };

    var employee1 = new Employee(1, "raghav", "mj", "bangalore");
    var employee2 = new Employee(2, "keshav", "anand", "madikeri");
    console.log("employee1 -> ", employee1);
    console.log("employee1.fullName() -> ", employee1.fullName());
    console.log("employee2 -> ", employee2);
    console.log("employee2.fullName() -> ", employee2.fullName());
  }
}
// constructorFunction();

//3. Object.Create()
function objectCreate() {
  var animal = Object.create({});
  animal.name = "Lion";
  animal.foodHabitat = "Carnivore";
  console.log("1. animal :- ", animal);
}
objectCreate();
