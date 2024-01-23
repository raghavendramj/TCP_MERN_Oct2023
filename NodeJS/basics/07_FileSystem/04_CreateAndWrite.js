const fs = require("fs");

const fileContent = "This content is added on twentyth January two thousand and twenty four";

fs.writeFile("04_WriteContent.txt", fileContent, (err) => {
  if (err) {
    console.log("Error");
  } else {
    console.log("File created!");
  }
});
