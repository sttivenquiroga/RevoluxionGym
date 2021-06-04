const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const NutritionPlan = require("../models/nutritionPlans");
const Auth = require("../middleware/auth");
const Admin = require("../middleware/admin");
const UserAuth = require("../middleware/user");

router.post(
  "/registerNutritionPlan",
  Auth,
  UserAuth,
  Admin,
  async (req, res) => {
    if (!req.body.userId || !req.body.nutritionPlan || !req.body.description)
      return res.status(401).send("Incomplete Data");
    const nutritionPlan = new NutritionPlan({
      userId: req.body.userId,
      nutritionPlan: req.body.nutritionPlan,
      description: req.body.description,
      status: true,
    });
    const result = await nutritionPlan.save();
    if (!result)
      return res.status(401).send("Error creating new nutrition plan");
    return res.status(200).send({ result });
  }
);

router.get("/listNutritionPlanUser", Auth, UserAuth, async (req, res) => {
  const nutritionPlan = await NutritionPlan.find({ userId: req.user._id });
  if (!nutritionPlan)
    return res.status(401).send("Error fetching nutrition plan information");
  return res.status(200).send({ nutritionPlan });
});

router.get(
  "/listNutritionPlan/:nutritionPlan?",
  Auth,
  UserAuth,
  Admin,
  async (req, res) => {
    const nutritionPlan = await NutritionPlan.find({
      nutritionPlan: new RegExp(req.params["nutritionPlan"], "i"),
    });
    if (!nutritionPlan)
      return res.status(401).send("Error fetching nutrition plan information");
    return res.status(200).send({ nutritionPlan });
  }
);

router.put("/updateNutritionPlan", Auth, UserAuth, Admin, async (req, res) => {
  if (
    !req.body._id ||
    !req.body.userId ||
    !req.body.nutritionPlan ||
    !req.body.description ||
    !req.body.status
  )
    return res.status(401).send("Incomplete Data");
  const nutritionPlan = await NutritionPlan.findByIdAndUpdate(req.body._id, {
    userId: req.body.userId,
    nutritionPlan: req.body.nutritionPlan,
    description: req.body.description,
    status: req.body.status,
  });
  if (!nutritionPlan)
    return res.status(400).send("Error updating nutrition plan");
  return res.status(200).send({ nutritionPlan });
});

router.put(
  "/desactivateNutritionPlan",
  Auth,
  UserAuth,
  Admin,
  async (req, res) => {
    if (
      !req.body._id ||
      !req.body.userId ||
      !req.body.nutritionPlan ||
      !req.body.description
    )
      return res.status(401).send("Incomplete Data");
    const nutritionPlan = await NutritionPlan.findByIdAndUpdate(req.body._id, {
      userId: req.body.userId,
      nutritionPlan: req.body.nutritionPlan,
      description: req.body.description,
      status: false,
    });
    if (!nutritionPlan)
      return res.status(400).send("Error deleting nutrition plan");
    return res.status(200).send({ nutritionPlan });
  }
);

router.delete(
  "/deleteNutritionPlan/:_id",
  Auth,
  UserAuth,
  Admin,
  async (req, res) => {
    const validateId = mongoose.Types.ObjectId.isValid(req.params._id);
    if (!validateId) return res.status(401).send("Process failed: Ivalid Id");
    const nutritionPlan = await NutritionPlan.findOneAndDelete(req.params._id);
    if (!nutritionPlan)
      return res
        .status(401)
        .send("Process failed: Error deleting nutrition plan");
    return res.status(200).send("Process sucelfull: Nutrition plan deleted");
  }
);
module.exports = router;
