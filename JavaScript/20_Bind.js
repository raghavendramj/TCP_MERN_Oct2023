function add(x, y) {
  return x + y + this.z;
}

var obj1 = {
  z: 10,
};

var resultCall = add.call(obj1, 12, 15);
var resultApply = add.apply(obj1, [12, 15]);
console.log("1.1. Call result is :- ", resultCall);
console.log("1.2. Apply result is :- ", resultApply);

var add10 = add.bind(obj1);
console.log("1.3. Bind result is :- ", add10(5, 15));
console.log("1.4. Bind result is :- ", add10(25, 15));
console.log("1.5. Bind result is :- ", add10(50, 15));
