const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
let movies = require("./00_movies.json");

//CRUD -> Create - Read - Update - Delete

//Create
app.use(express.json());
app.post("/api/movies", (req, res) => {
  const movie = req.body;

  console.log("Movie :- ", movie);

  if (!movie.director || !movie.title || !movie.genre) {
    res.send("director, title and genre are required!");
  }
  const movieNewObj = { id: movies.length + 1, ...movie };
  movies.push(movieNewObj);
  res.send(movieNewObj);
});

//Read
app.get("/api/movies", (req, res) => {
  console.log("Get All Movies invoked");
  res.send(movies);
});

app.listen(8082);

//Update
app.use(express.json());
app.put("/api/movies/:id", (req, res) => {
  const movieId = Number(req.param("id"));
  const movie = req.body;
  if (
    !movie.id ||
    !movie.director ||
    !movie.title ||
    !movie.genre ||
    !movie.releaseYear ||
    !movie.rating
  ) {
    res.send("director, title and genre are required!");
  }
  movies = movies.map((eachMovie) => {
    if (movieId == movie.id) {
      return movie;
    } else {
      return eachMovie;
    }
  });

  res.send(movies.find((eachMovie) => eachMovie.id == movie.id));
});

//Delete
app.delete("/api/movies/:id", (req, res) => {
  const movieId = Number(req.param("id"));
  console.log("Delete Invoked :- movieId ", movieId);
  movies = movies.filter((eachMovie) => eachMovie.id != movieId);
  res.send(movies);
});
