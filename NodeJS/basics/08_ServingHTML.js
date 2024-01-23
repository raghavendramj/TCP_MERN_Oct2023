const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const readStream = fs.createReadStream("08_Simple.html");
  res.writeHead(200, { "Content-type": "text/html" });
  readStream.pipe(res); 
});

server.listen("8082");
