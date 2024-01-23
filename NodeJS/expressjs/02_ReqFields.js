const express = require("express");
const application = express();
const authors = require("./00_authors.json");

application.get("/api/authors", (req, res) => {
  res.send(authors);
});

application.get("/api/authors/:id", (req, res) => {
  const authorId = Number(req.param("id"));
  const filteredAuthors = authors.filter((author) => author.id === authorId);

  if (filteredAuthors.length > 0) {
    res.send(filteredAuthors[0]);
  } else {
    res.send("No Authors found, with this id :-  " + authorId);
  }
});

application.listen(8082);
