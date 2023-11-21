//Constructor function
function Product(price, brand, model) {
  this.price = price;
  this.brand = brand;
  this.model = model;

  //Private Variable...
  var stocks = 10;

  //Expose a private variable to outside world!
  Object.defineProperty(this, "stks_avail", {
    get: function () { 
      return stocks;
    },

    set: function (value) {
      //Check 1 -> Value -> EMPTY Check
      if (value === "" || value === "undefined" || value === undefined) {
        throw Error("Invalid stock information");
      }

      //Check 2 - Type
      if (typeof value !== "number") {
        throw Error("Invalid stock information - Its not a number");
      } 
      console.log("Adding new ", value, "stocks !");
      stocks += value;
    },
  });
}
var apple = new Product(85000, "Apple", "IPhone14");
console.log("apple ->", apple);

console.log("1. apple.stks_avail ->", apple.stks_avail); //Invokes Getter
apple.stks_avail = 4; //Invokes Setter 
console.log("2. apple.stks_avail ->", apple.stks_avail); //Invokes Getter
