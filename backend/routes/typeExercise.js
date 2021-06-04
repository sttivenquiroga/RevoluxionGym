const express = require("express");
const router = express.Router();
const TypeExercise = require("../models/typeExercise");

const Auth = require("../middleware/auth");
const UserAuth = require("../middleware/user");
const AdminAuth = require("../middleware/admin");

// Save  type exercise
router.post("/create", Auth, UserAuth, AdminAuth, async (req, res) => {
  if (!req.body.typeExercise)
    return res.status(401).send("Incomplete data");

  const typeExercise = new TypeExercise({
    typeExercise: req.body.typeExercise,
  });

  const result = await typeExercise.save();
  if (!result) return res.status(401).send("Error creating type exercise");
  return res.status(200).send({ result });
});

// list type exercise
router.get("/getAll", Auth, UserAuth, AdminAuth, async (req, res) => {

  const typeExercise = await TypeExercise.find();
  if (!typeExercise) return res.status(401).send("Error fetching type exercises");
  return res.status(200).send({ typeExercise });
});

// edit type exercise
router.put("/edit", Auth, UserAuth, AdminAuth, async (req, res) => {
  if (!req.body._id || !req.body.typeExercise)
    return res.status(401).send("Incomplete data");

  const typeExercise = await TypeExercise.findByIdAndUpdate(req.body._id, {
    typeExercise: req.body.typeExercise,
    status: true
  });
  if (!typeExercise) return res.status(401).send("Error updating type exercise");
  return res.status(200).send({ typeExercise });
});

// Delete type exercise
router.put("/delete", Auth, UserAuth, AdminAuth, async (req, res) => {
  if (!req.body._id || !req.body.typeExercise)
    return res.status(401).send("Incomplete data");

  const typeExercise = await TypeExercise.findByIdAndUpdate(req.body._id, {
    typeExercise: req.body.typeExercise,
    status: false
  });
  if (!typeExercise) return res.status(401).send("Error deleting type exercise");
  return res.status(200).send("Deleted type exercise");
});

module.exports = router;