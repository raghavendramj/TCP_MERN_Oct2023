class Animal {
  constructor(legs) {
    this.legs = legs;
  }
  walk() {
    console.log("Walking on ", this.legs, " legs");
  }
}

class Bird extends Animal {
  constructor(legs) {
    super(legs);
  }

  fly() {
    console.log("Flying...");
  }
}

let piegon = new Bird(2);
console.log("Piegon :- ", piegon);
piegon.walk();
piegon.fly();
