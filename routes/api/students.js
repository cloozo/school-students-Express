const express = require("express");
const router = express.Router();
const uuid = require("uuid");
const students = require("../../db/Students"); //..means outsude of API  folder then .. outside of routes foler
// this route gets all Students
router.get("/", (req, res) => {
  res.json(students);
});
// this route gets a single student by ID
router.get("/:id", (req, res) => {
  const isFound = students.some(
    (student) => student.id === parseInt(req.params.id)
  );
  if (isFound) {
    res.json(
      students.filter((student) => student.id === parseInt(req.params.id))
    );
  } else {
    res
      .status(400)
      .json({ msg: `No student with the Id of : ${req.params.id}` });
  }
});
//create a new student
router.post("/", (req, res) => {
  const newStudent = {
    // id: uuid.v4(),
    id: uuid.v4(),
    mame: req.body.name,
    email: req.body.email,
    status: "active",
    gender: req.body.gender,
    age: req.body.age,
    salary: req.body.salary,
    school: req.body.school,
  };
  /*   if (
    !newStudent.name ||
    !newStudent.email ||
    !newStudent.gender ||
    !newStudent.age ||
    !newStudent.salary ||
    !newStudent.school
  ) {
    return res.status(400).json({ msg: "Please enter requested information" });
  } */
  students.push(newStudent);
  res.json(students);
});

// update member/
router.put("/:id", (req, res) => {
  const isFound = students.some(
    (student) => student.id === parseInt(req.params.id)
  );
  if (isFound) {
    const updStudent = req.body;
    students.forEach((student) => {
      if (student.id === parseInt(req.params.id)) {
        student.name = updStudent.name ? updStudent.name : student.name;
        student.email = updStudent.email ? updStudent.email : student.email;
        student.salary = updStudent.salary ? updStudent.salary : student.salary;
        student.school = updStudent.school ? updStudent.school : student.school;
        res.json({ msg: "Member updated", student });
      }
    });
  } else {
    res
      .status(400)
      .json({ msg: `No student with the Id of : ${req.params.id}` });
  }
});
//Update a member
router.put("/:id", (req, res) => {
  const isFound = students.some(
    (student) => student.id === parseInt(req.params.id)
  );
  if (isFound) {
    const updStudent = req.body;
    students.forEach((student) => {
      if (student.id === parseInt(req.params.id)) {
        student.name = updStudent.name ? updStudent.name : student.name;
        student.email = updStudent.email ? updStudent.email : student.email;
        student.salary = updStudent.salary ? updStudent.salary : student.salary;
        student.school = updStudent.school ? updStudent.school : student.school;
        res.json({ msg: "Member updated", student });
      }
    });
  } else {
    res
      .status(400)
      .json({ msg: `No student with the Id of : ${req.params.id}` });
  }
});
// Delete a member
router.delete("/:id", (req, res) => {
  const isFound = students.some(
    (student) => student.id === parseInt(req.params.id)
  );
  if (isFound) {
    res.json({
      msg: "Student successfully Deleted!",
     students:  students.filter((student) => student.id !== parseInt(req.params.id))
    });
  } else {
    res
      .status(400)
      .json({ msg: `No student with the Id of : ${req.params.id}` });
  }
});
//
module.exports = router;
