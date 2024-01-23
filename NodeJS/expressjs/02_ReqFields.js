const express = require("express");
const application = express();
const authors = require("./00_authors.json");
const bodyParser = require("body-parser");

application.get("/api/authors", (req, res) => {
  res.send(authors);
});

application.get("/api/author/:id", (req, res) => {
  const authorId = Number(req.param("id"));
  const filteredAuthors = authors.filter((author) => author.id === authorId);

  if (filteredAuthors.length > 0) {
    res.send(filteredAuthors[0]);
  } else {
    res.send("No Authors found, with this id :-  " + authorId);
  }
});

application.use(bodyParser.json());
application.post("/api/author/", (req, res) => {
  console.log("query -> ", req.body);
  const { key, value } = req.body;

  if (!key || !value) {
    res.send("Both key and value are required to continue!");
  }

  const filteredAuthors = authors.filter((author) => author[key] == value);

  if (filteredAuthors.length > 0) {
    res.send(filteredAuthors[0]);
  } else {
    res.send("No Authors found, with this key :-  " + value);
  }

  res.send("query");
});

application.listen(8082);
