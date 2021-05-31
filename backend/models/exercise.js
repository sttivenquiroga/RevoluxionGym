const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// Schema of exercise
const exerciseSchema = new mongoose.Schema({
  typeExerciseId: String,
  typeMuscleId: String,
  exercise: String,
  description: String,
  img: String,
  status: Boolean,
});

const Exercise = mongoose.model("exercise", exerciseSchema);
module.exports = Exercise;