var personA = {
  firstName: "Adam",
  lastName: "Gilchrist",
  email: "adam@gmail.com",
  phone: 12345,
};

var personB = personA;

console.log("-----------------------------------------------------");
console.log("1. personA :- ", personA);
console.log("1. personB :- ", personB);

personA["address"] = "Bangalore";  //Impacts both the variables -> pass by reference
personA = { firstName: "Adam" }; //redeclaration :- changes the reference of personA

console.log("-----------------------------------------------------");
console.log("2. personA :- ", personA);
console.log("2. personB :- ", personB); 