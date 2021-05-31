const mongoose = require("mongoose");

const nutritionPlanSchema = new mongoose.Schema({
    user_id: String,
    nutritionPlan: String,
    description: String,
    status: Boolean,
});

const NutritionPlan = mongoose.model("nutritionPlan", nutritionPlanSchema);

module.exports = NutritionPlan;