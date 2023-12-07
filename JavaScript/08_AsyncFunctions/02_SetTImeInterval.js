let currentTimeFunc = () => {
  let currentTime = new Date();
  console.log("Current Time :- ", currentTime.toLocaleTimeString());
};

console.log("Current Date :- ", new Date().toLocaleDateString());
console.log("Starting the time interval :- ", new Date().toLocaleTimeString());

const currentTimeInterval = setInterval(currentTimeFunc, 1000);

setTimeout(() => {
    console.log("STOPPING the time interval :- ", new Date().toLocaleTimeString());

  clearInterval(currentTimeInterval);
}, 10000);