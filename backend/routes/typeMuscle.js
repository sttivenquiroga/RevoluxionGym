const express = require("express");
const router = express.Router();
const TypeMuscle = require("../models/typeMuscle");
const User = require("../models/user");
const Auth = require("../middleware/auth");

// Save  typeMuscle
router.post("/saveTypeMuscle", Auth, async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) return res.status(401).send("Usuario no autenticado");
  const typeMuscle = new TypeMuscle({
    typeMuscle: req.body.typeMuscle,
  });
  const result = await typeMuscle.save();
  return res.status(200).send({ result });
});

// Consultar todos los musculos
router.get("/listTypeMuscle", Auth, async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) return res.status(401).send("Usuario no autenticado");
  const typeMuscle = await TypeMuscle.find();
  return res.status(200).send({ typeMuscle });
});

// Editar tipo de musculo
router.put("/updateTypeMuscle", Auth, async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) return res.status(401).send("Usuario no autenticado");
  const typeMuscle = await TypeMuscle.findByIdAndUpdate(req.body._id, {
    typeMuscle: req.body.typeMuscle,
    status: req.body.status,
  });
  if (!typeMuscle) return res.status(401).send("No se pudo editar el tipo de musculo");
  return res.status(200).send({ typeMuscle });
});

// Eliminar tipo de musculo
router.delete("/:_id", Auth, async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) return res.status(401).send("Usuario no autenticado");
  const typeMuscle = await TypeMuscle.findByIdAndDelete(req.params._id);
  if (!typeMuscle) return res.status(401).send("no se encuentra el tipo de musculo a eliminar");
  return res.status(200).send({ mensaje: "Tipo de musculo eliminado" });
});

module.exports = router;
