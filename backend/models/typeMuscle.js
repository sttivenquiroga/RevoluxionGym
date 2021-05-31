const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// Schema of exercise
const typeMuscleSchema = new mongoose.Schema({
  typeMuscle: String,
  status: Boolean
});

const TypeMuscle = mongoose.model("typeMuscle", typeMuscleSchema);
module.exports = TypeMuscle;