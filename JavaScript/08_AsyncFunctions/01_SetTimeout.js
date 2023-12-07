// Timing Events
// The window object allows execution of code at specified time intervals.

// These time intervals are called timing events.

// The two key methods to use with JavaScript are:

// setTimeout(function, milliseconds)
// Executes a function, after waiting a specified number of milliseconds.

// setInterval(function, milliseconds)
// Same as setTimeout(), but repeats the execution of the function continuously.

console.log("Timing Events Class...")
setTimeout(() => {
  console.log("Current Date and Time :- ", new Date());
}, 3000);
