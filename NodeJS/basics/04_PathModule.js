const path = require("path");

console.log("__filename -> ", __filename);



console.log("process.env.PATH:- ", process.env.PATH);

console.log("Filename and its info :- ", path.parse(__filename));
console.log("path.parse(__filename).dir :- ", path.parse(__filename).dir);
console.log("path.dirname():- :- ", path.dirname(__filename));
console.log("path.basename():- :- ", path.basename(__filename));
console.log("path.extname():- :- ", path.extname(__filename)); 


// FYI :- https://nodejs.org/api/path.html