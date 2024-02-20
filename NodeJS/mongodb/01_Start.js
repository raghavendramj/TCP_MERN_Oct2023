const mongoose = require("mongoose");
const { Employee, Post, Department } = require("./00_Models");

const connPromise = mongoose.connect("mongodb://127.0.0.1/test");

connPromise
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB...", err));

async function getEmployees() {
  const whereCondition = {
    department: "Engineering",
  };

  //   const departments = await Department.find();
  //   console.log("All departments :- ", departments);

  const posts = await Post.find();
  console.log("All posts :- ", posts);
}
getEmployees();
