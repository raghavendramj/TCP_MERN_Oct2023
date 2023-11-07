function add(x, y) {
  return x + y + this.z;
}

var obj1 = {
  z: 12,
};
var resultCall = add.call(obj1, 12, 15);
var resultApply = add.apply(obj1, [12, 15]);
console.log("1.1. Call result is :- ", resultCall);
console.log("1.2. Apply result is :- ", resultApply);

var obj2 = {
  z: 20,
};

var resultCall2 = add.call(obj2, 45, 67);
var resultApply2 = add.apply(obj2, [23, 45]);

console.log("2.1. Call result is :- ", resultCall2);
console.log("2.2. Apply result is :- ", resultApply2);
