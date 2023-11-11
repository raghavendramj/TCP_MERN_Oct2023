var person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// What is this?
// In JavaScript, the this keyword refers to an object.
// Which object depends on how this is being invoked (used or called).
// The this keyword refers to different objects depending on how it is used:

//1. In an object method, this refers to the object.
console.log("Object :- ", person.fullName());

//2. Alone, this refers to the global object.
// Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
console.log(this); //In browser

//3. In a function, this refers to the global object.
function testFun() {
  // Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
  console.log(this);
}
testFun();

//4. In a function, in strict mode, this is undefined.
function testFunStrict() {
  "use strict";
  console.log(this); //undefined
}
testFunStrict();

// 5. In an event, this refers to the element that received the event.
<html>
  <body>
    <h1>
      The JavaScript <i>this</i> Keyword
    </h1>
    <button onclick="console.log(this); this.style.display='none'">
      Click to Remove Me!
    </button>
  </body>
</html>;

// 6. Methods like call(), apply(), and bind() can refer this to any object.

// Case 1 :- User Object's tagged method
var car = {
  speed: function () {
    console.log("This is car's speed method");
  },
};
car.speed();

// Case 2 :- Global object tagged method
// If a function is not a method of a JavaScript object, it is a function of the global object (window object);
function raghavTesting() {
  console.log("This is raghav testing method");
}
window.raghavTesting(); //This is raghav testing method
raghavTesting(); //This is raghav testing method

// Conclusion :- In JavaScript all functions are object methods.
