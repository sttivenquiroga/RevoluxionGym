/**
 * Description: routes of the rols
 * Autor: Miguel Angel Cerquera Rodriguez
 * Fecha modificacion: 4/06/2021
 */

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Rol = require("../models/rol");
const Auth = require("../middleware/auth");
const UserAuth = require("../middleware/user");
const Admin = require("../middleware/admin");

// Create rol
router.post("/add", Auth, UserAuth, Admin, async (req, res) => {
  if (!req.body.rol || !req.body.description)
    return res.status(401).send("Incomplete data");

  const exist = await Rol.findOne({ rol: req.body.rol });
  if (exist) return res.status(401).send("Process failed: role already exists");

  const rol = new Rol({
    rol: req.body.rol,
    description: req.body.description,
  });

  const result = await rol.save();
  if (!result) return res.status(401).send("Error creating role");
  res.status(200).send({ result });
});

// Get all rols
router.get("/getAll", Auth, UserAuth, Admin, async (req, res) => {
  const rol = await Rol.find();
  if (!rol) return res.status(401).send("Error fetching role");
  res.status(200).send({ rol });
});

// Update rol
router.put("/update", Auth, UserAuth, Admin, async (req, res) => {
  if (!req.body._id || !req.body.rol || !req.body.description)
    return res.status(401).send("Incomplete data");

  const validId = mongoose.Types.ObjectId.isValid(req.body._id);
  if (!validId) return res.status(401).send("Process failed: Invalid id");

  const rol = await Rol.findByIdAndUpdate(req.body._id, {
    rol: req.body.rol,
    description: req.body.description,
  });

  if (!rol) return res.status(401).send("Error updating role");
  res.status(200).send({ rol });
});

// Delete rol
router.put("/delete", Auth, UserAuth, Admin, async (req, res) => {
  if (!req.body._id || !req.body.rol || !req.body.description)
    return res.status(401).send("Incomplete data");

  const validId = mongoose.Types.ObjectId.isValid(req.body._id);
  if (!validId) return res.status(401).send("Process failed: Invalid id");

  const rol = await Rol.findByIdAndUpdate(req.body._id, {
    rol: req.body.rol,
    description: req.body.description,
    status: false,
  });

  if (!rol) return res.status(401).send("Error deleting rol");
  res.status(200).send({ rol });
});

module.exports = router;
