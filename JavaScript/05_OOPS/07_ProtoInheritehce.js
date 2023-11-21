function Car(type, fuelType) {
  this.type = type;
  this.fuelType = fuelType;
}

function DefinePrice(price, type, fuelType) {
  Car.call(this, type, fuelType);
  this.price = price;
}

DefinePrice.prototype = new Car(); //By doing this, we will loose DefinePrice's constructor
DefinePrice.prototype.constructor = DefinePrice; // DefinePrice's constructor is set back again!

// Above steps is what acheives us Prototypical inheritence

var newCarWithPrice = new DefinePrice(10000, "Hybrid", "Petrol");
