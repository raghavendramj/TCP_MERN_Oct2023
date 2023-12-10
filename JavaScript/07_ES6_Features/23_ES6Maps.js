// Syntax :- let newMap = new Map([iterable]);

let john = { name: "John Doe" };
let lilly = { name: "Lilly Bush" };
let peter = { name: "Peter Drucker" };

let userRoles = new Map();

console.log("typeof(userRoles) :- ", typeof userRoles);
console.log("userRoles instanceof Map :- ", userRoles instanceof Map);

userRoles.set(john, "admin");
userRoles.set(lilly, "editor");
userRoles.set(peter, "subscriber");

console.log("userRoles -> ", userRoles);

//Second way of create map
let secondWayOfES6Map = new Map([
  [john, "admin"],
  [lilly, "editor"],
  [peter, "subscriber"],
]);

console.log("secondWayOfES6Map -> ", secondWayOfES6Map);
console.log("secondWayOfES6Map.get(peter) -> ", secondWayOfES6Map.get(peter));

console.log("\n................. FOR EACH Loop - keys()................. ");
for (const eachKey of userRoles.keys()) {
  console.log(
    "FOR EACH...Key :- ",
    eachKey,
    " -> value :- ",
    userRoles.get(eachKey)
  );
}

console.log("\n................. FOR EACH Loop - values()................. ");
for (const eachValue of userRoles.values()) {
  console.log("FOR EACH...eachValue :- ", eachValue);
}

console.log("\n................. FOR EACH Loop - entries()................. ");
for (const eachEntry of userRoles.entries()) {
  console.log(
    "FOR EACH...eachEntry :- ",
    eachEntry[0],
    " -> value :- ",
    eachEntry[1]
  );
}

let keys = [...userRoles.keys()];
console.log("Converted array keys :- ", keys);

let values = [...userRoles.values()];
console.log("Converted array values :- ", values);

userRoles.delete(peter);
console.log("\n After deleting peter is :- ", userRoles);


userRoles.clear();
console.log("\n After clearing the entire map is :- ", userRoles);