function logMessage(msg) {
  console.log("---------------> LOG Function! <-------------------");
  console.log("Message is :- ", msg);
}

const piValue = 3.142;

module.exports.printMsg = logMessage;
module.exports.pi = piValue;
