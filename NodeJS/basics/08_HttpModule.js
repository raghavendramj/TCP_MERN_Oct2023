const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.write("----------->>>> Welcome to HTTP Module");
  } else if (req.url == "/about") {
    res.write("**************** This is About Page!");
  } else {
    
    res.write("---> ERROR PAGE NOT FOUND! <----");
  }
  res.end();
});

server.listen("8082");
