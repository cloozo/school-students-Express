const express = require("express");
const router = express.Router();
const students = require("../../db/Students"); //..means outsude of API  folder then .. outside of routes foler
// this route gets all members
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
  res.send(req.body);
});
//
module.exports = router;
