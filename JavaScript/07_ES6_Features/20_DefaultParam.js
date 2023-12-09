class Person {
  #name;
  #age;
  #salary;

  constructor(name, age, salary) {
    this.#name = name;
    this.#age = age;
    this.#salary = salary;
  }

  //showSalary -> default parameter/optional parameter
  getDetails(showSalary = false) {
    let info = `Person ${this.#name} with age ${this.#age}`;
    if (showSalary) {
      info += ` has salary ${this.#salary}`;
    }
    return info;
  }
}

let person = new Person("John Doe", 26, 10000);
console.log("Person details :-  ", person.getDetails(true)); 
