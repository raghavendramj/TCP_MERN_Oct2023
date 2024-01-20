const fs = require("fs");
const fileName = "07_StreamRead.txt";

const reader = fs.createReadStream(fileName, "utf-8");

reader.on("data", (chunk) => {
  console.log("\n*************** Data :- ****************\n", chunk.toString());
});

reader.on("end", () => {
  console.log("\n*************** Reached end of stream *************** ");
});

reader.on("error", () => {
  console.log("*************** Error occurred! ***************");
});
