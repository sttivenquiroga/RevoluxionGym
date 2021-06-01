const express = require("express");
const router = express.Router();
const NutritionPlan = require("../models/nutritionPlans");
const User = require("../models/user");
const Auth = require("../middleware/auth");

router.post("/registerNutritionPlan", Auth, async (req, res) => {
  verificateUser(req, res);
  if (!req.body.nutritionPlan || !req.body.description)
    return res.status(401).send("Incomplet Data");
  const nutritionPlan = new NutritionPlan({
    user_id: req.user._id,
    nutritionPlan: req.body.nutritionPlan,
    description: req.body.description,
    status: true,
  });
  const result = await nutritionPlan.save();
  if (!result)
    return res
      .status(401)
      .send("No se ha podido registrar el plan de nutrición");
  return res.status(200).send({ result });
});

router.get("/listNutritionPlan", Auth, async (req, res) => {
  await verificateUser(req, res);
  const nutritionPlan = await NutritionPlan.find({ user_id: req.user._id });
  if (!nutritionPlan)
    return res
      .status(401)
      .send("No se ha encontrado ningun resultado para este usuario");
  return res.status(200).send({ nutritionPlan });
});

router.put("/updateNutritionPlan", Auth, async (req, res) => {
  verificateUser(req, res);
  if (!req.body.nutritionPlan || !req.body.description || !req.body.status)
    return res.status(401).send("Incomplet Data");
  const nutritionPlan = await NutritionPlan.findByIdAndUpdate(req.body._id, {
    user_id: req.user._id,
    nutritionPlan: req.body.nutritionPlan,
    description: req.body.description,
    status: req.body.status,
  });
  if (!nutritionPlan)
    return res.status(400).send("No se ha podido actualizar la información");
  return res.status(200).send({ nutritionPlan });
});

const verificateUser = (req, res) => {
  const user = User.findById(req.user._id);
  if (!user) return res.status(401).send("Usuario no registra");
};

module.exports = router;
