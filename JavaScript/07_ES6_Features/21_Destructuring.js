const objects = ["table", "iphone", "apple", "Carrot"];
// const objects = ["table", "iphone"];

// const furniture = objects[0];
// const mobile = objects[1];
// const fruit = objects[2];

//Destructuring
const [furniture, mobile, fruit = "Orange"] = objects;

console.log("----------------------- ARRAY Destructuring ------------------------")
console.log("1. Furniture :- ", furniture);
console.log("2. Mobile :- ", mobile);
console.log("3. Fruit :- ", fruit);

let person = {
  firstName: "John",
  lastName: "Doe",
  age: "26",
  email: "johndoe@gmail.com",
};

console.log("----------------------- OBJECT Destructuring ------------------------")
let {lastName, age} = person;
console.log("1. age :- ", age);
console.log("2. lastName :- ", lastName);
