const fs = require("fs");

const fileContent = "This file is created and renamed!";
const createPromise = new Promise(() => {
  fs.writeFile("05_WriteContent.txt", fileContent, (err) => {
    if (err) {
      console.log("Error");
    } else {
      console.log("01. File created!");
    }
  });
});

const renamePromise = new Promise(() => {
  setTimeout(() => {
    fs.rename("05_WriteContent.txt", "05_RenamedContent.txt", (err) => {
      if (err) {
        console.log("Error");
      } else {
        console.log("02. File renamed!");
      }
    });
  }, 5000);
});

createPromise.then(renamePromise);
