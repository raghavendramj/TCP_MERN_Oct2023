const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { Student } = require("./00_Models");

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
  app.use("/students", router);
}

init();

//GET Method -> Students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find({});
    console.log("getStudentsAsync :: Students Fetched :- ", students);
    // res.send(students);
    res.json(students);
  } catch (err) {
    res.send("Something went wrong, contact your admin!!");
  }
});

//GET Method -> Student by ID
router.get("/:id", async (req, res) => {
  const studentId = req.params.id;
  console.log("Student Id :- ", studentId);
  const findQueryEq = { _id: { $eq: studentId } };
  try {
    const studentById = await Student.find(findQueryEq);
    console.log("Student by ID :- ", studentById);
    res.json(studentById);
  } catch (err) {
    res.send("Something went wrong, contact your admin!!");
  }
});

//POST Method -> Save Student

router.post("/", async (req, res) => {
  try {
    console.log("Request Body :- ", req.body);
    if (Object.keys(req.body).length === 0) {
      res.send("Unable to add student as we received empty body");
      return;
    }
    const newStudent = new Student({
      ...req.body,
    });
    const response = await newStudent.save();
    res.send("Success :- " + response);
  } catch (err) {
    res.send("Something went wrong, contact your admin!!");
  }
});

//Delete Method
router.delete("/:id", async (req, res) => {
  console.log("Received the delete request!");
  const studentId = req.params.id;

  //Add Validation for id
  const response = await Student.findByIdAndRemove(studentId);
  res.send(response);
});

//Update Method
router.put("/:id", async (req, res) => {
  console.log("Received the Update request!");

  try {
    console.log("Request Body :- ", req.body);
    if (Object.keys(req.body).length === 0) {
      res.send("Unable to add student as we received empty body");
      return;
    }
    const studentId = req.params.id;
    const response = await Student.findByIdAndUpdate(
      { _id: studentId },
      {
        $set: {
          ...req.body,
        },
      },
      { new: true } //Returns the modified data, without this you will get original data
    );
    res.send("Success, student got updated!" + response);
  } catch (err) {
    res.send("Something went wrong, contact your admin!!" + err);
  }
});

const port = process.env.POR || 8100;
app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
