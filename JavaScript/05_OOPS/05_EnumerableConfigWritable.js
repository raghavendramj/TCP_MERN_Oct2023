function featureTest() {
  var person = {
    name: "John Doe",
    email: "john.doe@gmail.com",
    phone: 12345,
  };

  //Property flags
  // Object properties, besides a value, have three special attributes (so-called “flags”):
  console.log("name :- ", Object.getOwnPropertyDescriptor(person, "name"));
  console.log("email  :- ", Object.getOwnPropertyDescriptor(person, "email"));
  console.log("phone :- ", Object.getOwnPropertyDescriptor(person, "phone"));
  console.log("1. PERSON :- ", person);

  // configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.
  person.age = 25;
  console.log("2. PERSON :- ", person);

  // writable – if true, the value can be changed, otherwise it’s read-only.
  delete person["email"];
  console.log("3. PERSON :- ", person);

  // enumerable – if true, then listed in loops, otherwise not listed.
  console.log("Keys :- ", Object.keys(person));
}

// featureTest();

function enumerableTest() {
  var person = {
    name: "John Doe",
    email: "john.doe@gmail.com",
    phone: 12345,
  };
  console.log("Before  Keys :- ", Object.keys(person));
  Object.defineProperty(person, "phone", {
    enumerable: false, //if true, then listed in loops, otherwise not listed.
  });

  console.log(
    "enumerableTest :- ",
    Object.getOwnPropertyDescriptor(person, "phone")
  );
  console.log("After Keys :- ", Object.keys(person));
}
enumerableTest();

function writableTest() {
  var person = {
    name: "John Doe",
  };
  console.log("1. Person :- ", person);
  Object.defineProperty(person, "name", {
    writable: false, // if true, the value can be changed, otherwise it’s read-only.
  });

  console.log(
    "writableTest :- ",
    Object.getOwnPropertyDescriptor(person, "name")
  );

  person.name = "Raghav";
  console.log("2. Person :- ", person);

  person["name"] = "Keshav";
  console.log("3. Person :- ", person);
}
writableTest();

function configurableTest() {
  var person = {
    name: "John",
  };
  Object.defineProperty(person, "name", {
    configurable: false, //if true, the property can be deleted and these attributes can be modified, otherwise not.
  });

  console.log(
    "configurableTest :- ",
    Object.getOwnPropertyDescriptor(person, "name")
  );
  console.log("1. PERSON :- ", person);
  delete person.name;
  console.log("2. PERSON :- ", person);
  delete person["name"];
  console.log("3. PERSON :- ", person);
}
configurableTest();
