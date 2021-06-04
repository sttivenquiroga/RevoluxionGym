const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

// Schema of exercise
const typeMuscleSchema = new mongoose.Schema({
  typeMuscle: String,
  status: {type:Boolean, default: true},
  date: { type: Date, default: Date.now },
});

const TypeMuscle = mongoose.model("typeMuscle", typeMuscleSchema);
module.exports = TypeMuscle;