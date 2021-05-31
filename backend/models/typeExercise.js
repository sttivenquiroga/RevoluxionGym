const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// Schema of exercise
const typeExerciseSchema = new mongoose.Schema({
  typeExercise: String,
  status: {type:Boolean, default: true}
});

const TypeExercise = mongoose.model("typeExercise", typeExerciseSchema);
module.exports = TypeExercise;