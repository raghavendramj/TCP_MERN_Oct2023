const { getDBConnection } = require("./00_utility");
const { Student } = require("./00_Models");

getDBConnection("tcp");

const students = [
  {
    _id: 1,
    first_name: "John",
    last_name: "Doe",
    class_id: 101,
    teacher_id: 201,
  },
  {
    _id: 2,
    first_name: "Alice",
    last_name: "Smith",
    class_id: 102,
    teacher_id: 202,
  },
  {
    _id: 3,
    first_name: "Bob",
    last_name: "Johnson",
    class_id: 101,
    teacher_id: 201,
  },
  {
    _id: 4,
    first_name: "Emma",
    last_name: "Brown",
    class_id: 103,
    teacher_id: 203,
  },
  {
    _id: 5,
    first_name: "Michael",
    last_name: "Davis",
    class_id: 102,
    teacher_id: 202,
  },
];

function addStudents() {
  Student.create(students)
    .then(() => console.log("Students saved successfully"))
    .catch((err) => console.error("Error saving students:", err));
}

// addStudents();

async function getStudentsAsync() {
  const students = await Student.find({});
  console.log("getStudentsAsync :: Students Fetched :- ", students);
}

// getStudentsAsync();

function getStudents() {
  Student.find({})
    .then((data) => console.log("getStudents :: Students found:", data))
    .catch((err) => console.error("Error finding students:", err));
}
// getStudents();

function insertManyExample() {
  const studentsToInsert = [
    {
      _id: 6,
      first_name: "Sarah",
      last_name: "Jones",
      class_id: 103,
      teacher_id: 203,
    },
    {
      _id: 7,
      first_name: "David",
      last_name: "Wilson",
      class_id: 101,
      teacher_id: 201,
    },
  ];
  Student.insertMany(studentsToInsert)
    .then((data) => console.log("Documents inserted successfully", data))
    .catch((err) => console.error("Error inserting documents:", err));
}
// insertManyExample();

function deleteOneExample() {
  const whereCondition = { _id: 1 };

  Student.deleteOne(whereCondition)
    .then((data) => console.log("Student deleted successfully", data))
    .catch((err) => console.error("Error deleting student:", err));
}

// deleteOneExample();

function insertOneExample() {
  const newStudent = new Student({
    _id: 8,
    first_name: "Emily",
    last_name: "Taylor",
    class_id: 102,
    teacher_id: 202,
  });
  newStudent
    .save()
    .then((data) => console.log("Student inserted successfully", data))
    .catch((err) => console.error("Error inserting student:", err));
}

// insertOneExample();

function updateOneExample() {
  const whereCondition = { _id: 2 };
  const setQuery = { last_name: "Johnson" };

  Student.updateOne(whereCondition, setQuery)
    .then((data) => console.log("Student updated successfully", data))
    .catch((err) => console.error("Error updating student:", err));
}

// updateOneExample();

function deleteManyExample() {
  const whereCondition = { class_id: 101 };

  Student.deleteMany(whereCondition)
    .then((data) => console.log("Student deleted successfully", data))
    .catch((err) => console.error("Error deleting student:", err));
}
// deleteManyExample();

function findByIdAndRemove() {
  Student.findByIdAndRemove(4)
    .then((data) => console.log("Student deleted successfully", data))
    .catch((err) => console.error("Error deleting student:", err));
}

findByIdAndRemove();
