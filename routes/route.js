const express = require("express");
const router = express.Router();
const  student_Act = require("../contollers/students");

router.get('/', student_Act.getStudents);
router.get('/:roll', student_Act.getspecStudent);
router.post('/', student_Act.createstudent);

module.exports = router;