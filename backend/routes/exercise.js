const express = require("express");
const router = express.Router();
const Exercise = require("../models/exercise");
const Auth = require("../middleware/auth");
const UserAuth = require("../middleware/user");

// Save  exercise
router.post("/create", Auth, UserAuth, async (req, res) => {
  if (
    !req.body.typeExerciseId ||
    !req.body.typeMuscleId ||
    !req.body.exercise ||
    !req.body.description ||
    !req.body.img
  )
    return res.status(401).send("Incomplete data");

  const exercise = new Exercise({
    typeExerciseId: req.body.typeExerciseId,
    typeMuscleId: req.body.typeMuscleId,
    exercise: req.body.exercise,
    description: req.body.description,
    img: req.body.img,
  });

  const result = await exercise.save();
  if (!result) return res.status(401).send("Error creating exercise");
  return res.status(200).send({ result });
});

// list exercises
router.get("/getAll", Auth, UserAuth, async (req, res) => {
  const exercise = await Exercise.find();
  if (!exercise) return res.status(401).send("Error fetching exercises");
  return res.status(200).send({ exercise });
});

// Edit exercises
router.put("/edit", Auth, UserAuth, async (req, res) => {
  if (
    !req.body._id ||
    !req.body.typeExerciseId ||
    !req.body.typeMuscleId ||
    !req.body.exercise ||
    !req.body.description ||
    !req.body.img
  )
    return res.status(401).send("Incomplete data");

  const exercise = await Exercise.findByIdAndUpdate(req.body._id, {
    typeExerciseId: req.body.typeExerciseId,
    typeMuscleId: req.body.typeMuscleId,
    exercise: req.body.exercise,
    description: req.body.description,
    img: req.body.img,
    status: true,
  });

  if (!exercise) return res.status(401).send("Error updating exercise");
  return res.status(200).send({ exercise });
});

// Delete exercise
router.put("/delete", Auth, UserAuth, async (req, res) => {
  if (
    !req.body._id ||
    !req.body.typeExerciseId ||
    !req.body.typeMuscleId ||
    !req.body.exercise ||
    !req.body.description ||
    !req.body.img
  )
    return res.status(401).send("Incomplete data");

  const exercise = await Exercise.findByIdAndUpdate(req.body._id, {
    typeExerciseId: req.body.typeExerciseId,
    typeMuscleId: req.body.typeMuscleId,
    exercise: req.body.exercise,
    description: req.body.description,
    img: req.body.img,
    status: false,
  });

  if (!exercise) return res.status(401).send("Error deleting exercise");
  return res.status(200).send("Deleted exercise");
});

module.exports = router;
