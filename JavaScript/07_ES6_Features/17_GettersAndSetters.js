class Product {
  #name; //Private Member!
  constructor(name, price) {
    this.#name = name;
    this.price = price;
  }

  get name() {
    console.log("Name getter invoked...");
    return this.#name;
  }

  set name(newName) {
    console.log("Name setter invoked...", newName);
    if (newName && newName.length > 0) {
      this.#name = newName;
    }
  }
}

const iphone = new Product("Iphone 14", "60,000");
console.log("1. iphone.name -> ", iphone.name);
console.log("1. iphone.price -> ", iphone.price);

iphone.name = "Iphone 14 Plus";

console.log("2. iphone.name -> ", iphone.name);
