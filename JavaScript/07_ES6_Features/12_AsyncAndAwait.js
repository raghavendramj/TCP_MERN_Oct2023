// "async and await make promises easier to write"
// async makes a function return a Promise
// await makes a function wait for a Promise

function asyncFunctionExample() {
  async function sayHello() {
    return "Welcome to JS World!";
  }

  function sayHelloSyntax() {
    return Promise.resolve("Hello");
  }

  sayHello().then((msg) => console.log("sayHello :- ", msg));
  sayHelloSyntax().then((msg) => console.log("sayHelloSyntax :- ", msg));
}

let fetchDBDetails = async () => {
  let dbPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(["Banana", "Apple", "Grapes", "Orange"]), 5000);
  });

  const dbInterval = setInterval(
    () => console.log("Waiting for db fetch results...", dbPromise),
    1000
  );
  setTimeout(() => clearInterval(dbInterval), 5000);

  let fruits = await dbPromise;
  console.log("fruits :- ", fruits); 
};

fetchDBDetails();
