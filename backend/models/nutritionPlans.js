const mongoose = require("mongoose");

const nutritionPlanSchema = new mongoose.Schema({
  nutritionPlan: String,
  user_id: { type: mongoose.Schema.ObjectId, ref: "user" },
  description: String,
  status: {type: Boolean, default: true},
  date: { type: Date, default: Date.now },
});

const NutritionPlan = mongoose.model("nutritionPlan", nutritionPlanSchema);

module.exports = NutritionPlan;
