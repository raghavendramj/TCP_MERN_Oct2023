const fileSystem = require("fs");

fileSystem.stat("02_ToOpen.txt", (err, stats) => {
  if (err) {
    console.log("Error reading the file! :- ", err);
  } else {
    console.log("Statistics about file :- ", stats);
    console.log("stats isDir :- ", stats.isDirectory());
    console.log("stats isFile :- ", stats.isFile());
    console.log("stats size :- ", stats.size);
  }
});
