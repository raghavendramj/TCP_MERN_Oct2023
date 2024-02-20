const { getDBConnection } = require("./00_utility");
const { Student } = require("./00_Models");

getDBConnection();

async function getStudents() {
  const students = await Student.find();
  console.log("All students :- ", students);
}
// getStudents();

const newStudent = new Student({
  _id: 125,
  first_name: 'Vaibhav',
  last_name: 'Y',
  class_id: 103,
  teacher_id: 207,
});

newStudent
  .save()
  .then((student) => {
    console.log("New student saved:", student);
  })
  .catch((error) => {
    console.error("Error saving student:", error);
  });
