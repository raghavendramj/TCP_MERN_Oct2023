const mongoose = require("mongoose");

//{ "_id" : ObjectId("65cf92986ff073e0b8034168"),
// "name" : "Jane Smith",
// "department" : "HR",
// "position" : "HR Manager",
// "salary" : 75000,
// "join_date" : "2022-11-20" }

const employeeSchema = new mongoose.Schema({
  name: String,
  department: String,
  position: String,
  salary: Number,
  join_date: String,
});

 
const departmentSchema = new mongoose.Schema({
  _id:String,
  name: String,
  description: String 
});

const postSchema = new mongoose.Schema({ 
    title: String,
    body: String,
    category: String,
    likes: Number,
    tags: Array,
    date: Date,
  });
  

const Employee = mongoose.model("Employee", employeeSchema);
const Post = mongoose.model("Post", postSchema);
const Department = mongoose.model("Department", departmentSchema);

module.exports = {
  Employee,
  Department,
  Post
};
