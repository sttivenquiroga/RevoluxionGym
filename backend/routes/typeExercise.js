const express = require("express");
const router = express.Router();
const TypeExercise = require("../models/typeExercise");
const User = require("../models/user");
const Auth = require("../middleware/auth");

// Save  tipo exercise
router.post("/saveTypeExercise", Auth, async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) return res.status(401).send("Usuario no autenticado");
  const typeExercise = new TypeExercise({
    typeExercise: req.body.typeExercise,
    status: req.body.status
  });
  const result = await typeExercise.save();
  return res.status(200).send({ result });
});

// Consultar tipo de ejercicio
router.get("/listTypeExercise", Auth, async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) return res.status(401).send("Usuario no autenticado");
  const typeExercise = await TypeExercise.find();
  return res.status(200).send({ typeExercise });
});

// Editar tipo de ejercicio
router.put("/updateTypeExercise", Auth, async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) return res.status(401).send("Usuario no autenticado");
  const typeExercise = await TypeExercise.findByIdAndUpdate(req.body._id, {
    typeExercise: req.body.typeExercise,
    status: req.body.status
  });
  if (!typeExercise) return res.status(401).send("No se pudo editar el tipo ejercicio");
  return res.status(200).send({ typeExercise });
});

// Eliminar tipo de ejercicio
router.delete("/:_id", Auth, async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) return res.status(401).send("Usuario no autenticado");
  const typeExercise = await TypeExercise.findByIdAndDelete(req.params._id);
  if (!typeExercise) return res.status(401).send("No se encuentra el tipode ejercicio a eliminar");
  return res.status(200).send({ mensaje: "Tipo de ejercicio eliminado" });
});

module.exports = router;