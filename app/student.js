const mongoose = require("mongoose");
//import mongoose from 'mongoose'; ES6
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: String,
});

const Student = mongoose.model("student", StudentSchema);

//export
module.exports = Student;
