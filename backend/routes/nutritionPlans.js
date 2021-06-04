const express = require("express");
const router = express.Router();
const NutritionPlan = require("../models/nutritionPlans");
const Auth = require("../middleware/auth");
const Admin = require("../middleware/admin");
const UserAuth = require("../middleware/user");

router.post("/registerNutritionPlan", Auth, UserAuth, Admin, async (req, res) => {
  if (!req.body.nutritionPlan || !req.body.description)
    return res.status(401).send("Incomplete Data");
  const nutritionPlan = new NutritionPlan({
    user_id: req.user._id,
    nutritionPlan: req.body.nutritionPlan,
    description: req.body.description,
    status: true,
  });
  const result = await nutritionPlan.save();
  if (!result)
    return res.status(401).send("Error creating new nutrition plan");
  return res.status(200).send({ result });
});

router.get("/listNutritionPlan", Auth, UserAuth, Admin, async (req, res) => {
  const nutritionPlan = await NutritionPlan.find({ user_id: req.user._id });
  if (!nutritionPlan)
    return res
      .status(401)
      .send("Error fetching nutrition plan information");
  return res.status(200).send({ nutritionPlan });
});

router.put("/updateNutritionPlan", Auth, UserAuth, Admin, async (req, res) => {
  if (!req.body.nutritionPlan || !req.body.description || !req.body.status)
    return res.status(401).send("Incomplete Data");
  const nutritionPlan = await NutritionPlan.findByIdAndUpdate(req.body._id, {
    user_id: req.user._id,
    nutritionPlan: req.body.nutritionPlan,
    description: req.body.description,
    status: req.body.status,
  });
  if (!nutritionPlan)
    return res.status(400).send("Error updating nutrition plan");
  return res.status(200).send({ nutritionPlan });
});

router.put("/deleteNutritionPlan", Auth, UserAuth, Admin, async (req, res) => {
  if (!req.body.nutritionPlan || !req.body.description || !req.body.status)
    return res.status(401).send("Incomplete Data");
  const nutritionPlan = await NutritionPlan.findByIdAndUpdate(req.body._id, {
    user_id: req.user._id,
    nutritionPlan: req.body.nutritionPlan,
    description: req.body.description,
    status: false,
  });
  if (!nutritionPlan)
    return res.status(400).send("Error deleting nutrition plan");
  return res.status(200).send({ nutritionPlan });
});
module.exports = router;
