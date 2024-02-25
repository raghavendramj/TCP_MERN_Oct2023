const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { Movie } = require("./00_Models");

//Middleware -> to receive the input as JSON

const app = express();
const router = express.Router();
function init() {
  app.use(express.json());
  app.use(cors());
  const connectionPromise = mongoose.connect("mongodb://127.0.0.1/tcp");
  connectionPromise
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Could not connect to MongoDB...", err));
  app.use("/movies", router);
}

init();

//GET Method -> Movies
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find({});
    console.log(
      "getMoviesAsync :: Movies Fetched... ",
      movies.map((movie) => movie.id)
    );
    // res.send(movies);
    res.json(movies);
  } catch (err) {
    res.send("Something went wrong, contact your admin!!");
  }
});

//GET Method -> Movie by ID
router.get("/:id", async (req, res) => {
  const movieId = req.params.id;
  console.log("Movie Id :- ", movieId);
  const findQueryEq = { _id: { $eq: movieId } };
  try {
    const movieById = await Movie.find(findQueryEq);
    console.log("Movie by ID :- ", movieById);
    res.json(movieById);
  } catch (err) {
    res.send("Something went wrong, contact your admin!!");
  }
});

//POST Method -> Save Movie

router.post("/", async (req, res) => {
  try {
    console.log("Request Body :- ", req.body);
    if (Object.keys(req.body).length === 0) {
      res.send("Unable to add movie as we received empty body");
      return;
    }

    const maxIdMovie = await Movie.findOne().sort({ _id: -1 });
    console.log("maxIdMovie -> ", maxIdMovie);
    const newMovie = new Movie({
      ...req.body,
      _id: maxIdMovie._id + 1,
    });
    const response = await newMovie.save();
    res.send("Success :- " + response);
  } catch (err) {
    res.send("Something went wrong, contact your admin!! - ", err);
  }
});

//Delete Method
router.delete("/:id", async (req, res) => {
  console.log("Received the delete request!");
  const movieId = req.params.id;

  //Add Validation for id
  const response = await Movie.findByIdAndRemove(movieId);
  res.send(response);
});

//Update Method
router.put("/:id", async (req, res) => {
  const movieId = req.params.id;

  console.log("Received the Update request! :- movieId", movieId);
  console.log("req.body movieId", req.body);
  try {
    console.log("Request Body :- ", req.body);
    if (Object.keys(req.body).length === 0) {
      res.send("Unable to add movie as we received empty body");
      return;
    }
    const response = await Movie.findByIdAndUpdate(
      { _id: movieId },
      {
        $set: {
          ...req.body,
        },
      },
      { new: true } //Returns the modified data, without this you will get original data
    );
    res.send("Success, movie got updated!" + response);
  } catch (err) {
    res.send("Something went wrong, contact your admin!!" + err);
  }
});

const port = process.env.POR || 8100;
app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
