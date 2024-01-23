const fs = require("fs");
const fileName = "06_CreateAndAppend.txt";
const fileContent = "This file is created..";
const appendContent = "\n... now the content is being appended..";

const createPromise = new Promise(() => {
  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.log("Error");
    } else {
      console.log("01. File created!");
    }
  });
});
const appendPromise = new Promise(() => {
  fs.appendFile(fileName, appendContent, (err) => {
    if (err) {
      console.log("Error");
    } else {
      console.log("File content appended successfully");
    }
  });
});

createPromise
  .then(appendPromise)
  .catch((err) => console.log("Something broke!", err));
