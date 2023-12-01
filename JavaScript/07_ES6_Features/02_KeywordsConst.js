function constVarTest() {
  const pi = 3.142;
  console.log("1. PI :- ", pi);
  pi = 3.1421234; //TypeError: Assignment to constant variable
  console.log("2. PI :- ", pi);
}
// constVarTest();

function constArrayTest() {
  const cars = ["Saab", "Volvo", "BMW"];
  console.log("0. cars :-", cars);

  cars[0] = "Maruthi"; //Valid - Modification - Replace the element in the array to array
  console.log("1. cars :-", cars);
  cars.push("Toyota"); //Valid - Modification - adding to array
  console.log("2. cars :-", cars);

  delete cars[0]; //Valid - Modification - deleting from array
  console.log("3. cars :-", cars);
  cars.shift(); //Valid - Modification - shifting - remove from beginning from array
  console.log("4. cars :-", cars);
  cars.pop(); //Valid - Modification - popping - remove from last from array
  console.log("5. cars :-", cars);

  //cars = ["Saab", "Volvo", "BMW"]; //Invalid - TypeError: Assignment to constant variable.
  console.log("6. cars :-", cars);
}
constArrayTest();

function constObjectTest() {
  const car = { type: "Fiat", model: "500", color: "white" };
  console.log("1. car :-", car);
  car.color = "Red"; //Valid - Modification - changing the property value
  console.log("2. car :-", car);
  car["model"] = "Punto"; //Valid - Modification - changing the property value
  console.log("3. car :-", car);
  car.mileage = "24kms"; //Valid - Modification - Adding new property
  console.log("4. car :-", car);
  car = { type: "Fiat", model: "500", color: "white" }; //Invalid - TypeError: Assignment to constant variable.
  console.log("5. car :-", car);
}
// constObjectTest();
