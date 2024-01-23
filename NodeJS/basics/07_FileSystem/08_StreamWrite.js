const fs = require("fs");

const fileName = "08_StreamWrite.txt";
const writer = fs.createWriteStream(fileName);

const content = "This stream writes the content to file..." + fileName;
writer.write(content, (err) => {
  if (err) {
    console.log("Write error occurred!");
  } else {
    console.log("....Write success!!");
    const reader = fs.createReadStream(fileName);
    reader.on("data", (chunk) => {
      console.log(
        "\n*************** Data :- ****************\n",
        chunk.toString()
      );
    });
    reader.on("end", () => {
      console.log("08. Reached end of stream");
    });

    reader.on("error", () => {
      console.log("08. Error occurred!");
    });
  }
});
