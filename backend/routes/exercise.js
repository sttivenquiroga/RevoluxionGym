const express = require("express");
const router = express.Router();
const Exercise = require("../models/exercise");
const User = require("../models/user");
const Auth = require("../middleware/auth");

// Save  exercise
router.post("/saveExercise", Auth, async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) return res.status(401).send("Usuario no autenticado");
  const exercise = new Exercise({
    typeExerciseId: req.body.typeExerciseId,
    typeMuscleId: req.body.typeMuscleId,
    exercise: req.body.exercise,
    description: req.body.description,
    img: req.body.img,
  });
  const result = await exercise.save();
  return res.status(200).send({ result });
});

// Consultar ejercicios 
router.get("/listExercise", Auth, async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) return res.status(401).send("Usuario no autenticado");
  const exercise = await Exercise.find();
  return res.status(200).send({ exercise });
});

// Editar ejercicios
router.put("/updateExercise", Auth, async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) return res.status(401).send("Usuario no autenticado");
  const exercise = await Exercise.findByIdAndUpdate(req.body._id, {
    typeExerciseId: req.body.typeExerciseId,
    typeMuscleId: req.body.typeMuscleId,
    exercise: req.body.exercise,
    description: req.body.description,
    img: req.body.img,
    status: req.body.status
  });
  if (!exercise) return res.status(401).send("no se pudo editar el ejercicio");
  return res.status(200).send({ exercise });
});

// Eliminar ejercisios
router.delete("/:_id", Auth, async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) return res.status(401).send("Usuario no autenticado");
  const exercise = await Exercise.findByIdAndDelete(req.params._id);
  if (!exercise) return res.status(401).send("no se encuentra el ejercicio a eliminar");
  return res.status(200).send({ mensaje: "ejercicio eliminado" });
});

module.exports = router;
