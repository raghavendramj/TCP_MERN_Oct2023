const fs = require("fs");

const fileContent = "This file is created and renamed!";
const fileName = "05_WriteContent.txt";
const renamedFileName = "05_RenamedContent.txt";

const deletePromise = new Promise(() => {
  fs.unlink(renamedFileName, (err) => {
    if (err) {
      console.log("Error in unlinking the content!");
    } else {
      console.log("00. Successfully deleted file.");
    }
  });
});

const createPromise = new Promise(() => {
  fs.writeFile(fileName, fileContent, (err) => {
    if (err) {
      console.log("Error");
    } else {
      console.log("01. File created!");
    }
  });
});

const renamePromise = new Promise(() => {
  const interval = setInterval(
    () =>
      console.log(
        "Wating here to see the " +
          fileName +
          " contents before renaming to " +
          renamedFileName +
          "!..."
      ),
    1000
  );
  setTimeout(() => {
    clearInterval(interval);
    fs.rename(fileName, "05_RenamedContent.txt", (err) => {
      if (err) {
        console.log("Error");
      } else {
        console.log("02. File renamed!");
      }
    });
  }, 5000);
});

deletePromise
  .then(createPromise)
  .then(renamePromise)
  .catch((err) => console.log("Something broke!", err));

