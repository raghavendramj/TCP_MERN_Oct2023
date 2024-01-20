const fileSystem = require("fs");

//w+ -> Open for reading and writing. If the file does not exist, it is created. 
fileSystem.open("02_ToOpen.txt", "w+", (err, fd) => {
  if (err) {
    console.log("Error reading the file! :- ", err);
  } else {
    console.log("File opened to read :- ", fd);
  }
});
