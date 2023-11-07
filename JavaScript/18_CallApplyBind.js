// Call() Method:
// The call() method calls the function directly and sets this to the first argument passed to the call method
// and if any other sequences of arguments preceding the first argument are passed to the call method
// then they are passed as an argument to the function.

// The call() method is a predefined JavaScript method.
// It can be used to invoke (call) a method with an owner object as an argument (parameter).

//With call(), an object can use a method belonging to another object.

var person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log("1. Output is  :- ", person.fullName());
console.log("2. Output is  :- ", person.fullName.call());

// call(objectInstance)


var objJohn = {
  firstName: "John",
  lastName: "Doe",
};

console.log("3. Output is  :- ", person.fullName.call(objJohn));

var objGill = {
  firstName: "Adam",
  lastName: "Gill",
};

console.log("4. Output is  :- ", person.fullName.call(objGill));

// Method Reuse
// With the call() method, you can write a method that can be used on different objects.

function add(a) { 
  console.log("Received this is:- ", this);
  return a + this.b;
}
var obj1 = {
  b: 20,
};
// call(objectInstance, arg1, /* …, */ argN)
console.log("1. add result  :- ", add(40));
console.log("2. add result  :- ", add.call(obj1, 10));

var obj2 = {
  b: 15,
};
console.log("3. add result  :- ", add.call(obj2, 23));

