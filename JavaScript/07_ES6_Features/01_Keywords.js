function testVarKeyword() {
  var number = 10;
  console.log("1. VAR :: Number :- ", number);
  {
    var number = 20;
    console.log("2. VAR ::  Number :- ", number);
  }
  console.log("3. VAR ::  Number :- ", number);
}
// testVarKeyword();

function testLetKeyword() {
  let number = 10;
  console.log("1. LET :: Number :- ", number);
  {
    let number = 20;
    console.log("2. LET :: Number :- ", number);
  }
  console.log("3. LET :: Number :- ", number);
}
// testLetKeyword();

function hoistingVarTest() {
  console.log("1. Hoisting :: Number :- ", number);
  var number;
  console.log("2. Hoisting :: Number :- ", number);
  number = 10;
  console.log("3. Hoisting :: Number :- ", number);
}
// hoistingVarTest();

function letHoistTest() {
  console.log("1. My number :- ", myNumber); //Cannot access 'myNumber' before initialization
  let myNumber;
  console.log("2. My number :- ", myNumber);
  myNumber = 23;
  console.log("3. My number :- ", myNumber);
}

letHoistTest();

var simpleVar = 10;
console.log("1. simpleVar :- ", simpleVar); //10
console.log("2. simpleVar :- ", window.simpleVar); //10

let simpleLet = 20;
console.log("1. simpleLet :- ", simpleLet); //20
console.log("2. simpleLet :- ", window.simpleLet); //undefined
//Because -> let variables are not bound to window object, as they are blocked scope variables
