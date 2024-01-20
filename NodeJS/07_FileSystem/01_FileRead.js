const fileSystem = require("fs");

fileSystem.readFile("01_MyFile.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error reading the file! :- ", err);
  } else {
    console.log("Asyncronously reading data :- ", data);
  }
});


let nonUTFFormattedData = fileSystem.readFileSync("01_MyFile.txt");
console.log("1. Syncronously read - normal - non-utf-8 buffer data :- ", nonUTFFormattedData);
console.log("2. Syncronously read - normal - non-utf-8 data string :- ", nonUTFFormattedData.toString());

let uTFFormattedData = fileSystem.readFileSync("01_MyFile.txt", "utf-8");
console.log("3. Syncronously read - utf-8 - formatted data", uTFFormattedData); 