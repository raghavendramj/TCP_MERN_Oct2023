const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { Student } = require("./00_Models");

//Middleware -> to receive the input as JSON

const app = express();
const router = express.Router();
app.use(express.json());

const connectionPromise = mongoose.connect("mongodb://127.0.0.1/tcp");

connectionPromise
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB...", err));

app.get("/", (req, res) => {
  res.send("Welcome to EXPRESS JS");
});

app.use("/students", router);

router.get("/", async (req, res) => {
  console.log("Welcome to students router!");

  try {
    const students = await Student.find({});
    console.log("getStudentsAsync :: Students Fetched :- ", students);
    // res.send(students);
    res.json(students);
  } catch (err) {
    res.send("Something went wrong, contact your admin!!");
  }
});

const port = process.env.POR || 8100;
app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
