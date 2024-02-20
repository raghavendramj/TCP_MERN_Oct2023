const { getDBConnection } = require("./00_utility");
const { Student } = require("./00_Models");

getDBConnection();

const indianNames = [
  { first_name: "Aryan", last_name: "Shah" },
  { first_name: "Aisha", last_name: "Verma" },
  { first_name: "Arjun", last_name: "Pandey" },
  { first_name: "Kavya", last_name: "Deshmukh" },
  { first_name: "Rohan", last_name: "Reddy" },
];

const studentsData = indianNames.map((studentName, index) => ({
  _id: 110 + index,
  class_id: 205 + index,
  teacher_id: 305 + index,
  ...studentName,
}));
// console.log("studentsData :- ", studentsData);

Student.insertMany(studentsData)
  .then((value) => {
    console.log("New students inserted:", value);
  })
  .catch((error) => {
    console.error("Error inserting students:", error);
  });
