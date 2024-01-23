var fs = require("fs");

var readable = fs.createReadStream("09_input.txt");
var writable = fs.createWriteStream("09_output.txt");
readable.pipe(writable);

console.log("Program Ended");
