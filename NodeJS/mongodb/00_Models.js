const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: String,
  body: String,
  category: String,
  likes: Number,
  tags: Array,
  date: Date,
});

const employeeSchema = new mongoose.Schema({
  name: String,
  department: String,
  position: String,
  salary: Number,
  join_date: Date,
});

const departmentSchema = new mongoose.Schema({
  _id: String,
  name: String,
  description: String,
});

const studentSchema = new mongoose.Schema({
  _id: Number,
  first_name: String,
  last_name: String,
  class_id: Number,
  teacher_id: Number,
});

const movieSchema = new mongoose.Schema({
  _id: Number,
  title: String,
  director: String,
  genre: String,
  releaseYear: Number,
  rating: Number,
});

const Employee = mongoose.model("Employee", employeeSchema);
const Post = mongoose.model("Post", postSchema);
const Student = mongoose.model("Student", studentSchema);
const Department = mongoose.model("Department", departmentSchema);
const Movie = mongoose.model("Movie", movieSchema);

module.exports = {
  Employee,
  Department,
  Post,
  Student,
  Movie
};
