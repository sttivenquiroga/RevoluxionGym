const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// Schema of exercise
const exerciseSchema = new mongoose.Schema({
  typeExerciseId: { type: mongoose.Schema.ObjectId, ref: "typeExercise" },
  typeMuscleId: { type: mongoose.Schema.ObjectId, ref: "typeMuscle" },
  exercise: String,
  description: String,
  img: String,
  status: {type:Boolean, default: true},
  date: { type: Date, default: Date.now },
});

const Exercise = mongoose.model("exercise", exerciseSchema);
module.exports = Exercise;