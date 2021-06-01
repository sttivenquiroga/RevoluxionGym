const express = require("express");
const router = express.Router();
const TypeMuscle = require("../models/typeMuscle");
const Auth = require("../middleware/auth");
const UserAuth = require("../middleware/user");

// Save  type muscle
router.post("/create", Auth, UserAuth, async (req, res) => {
  if (!req.body.typeMuscle)
    return res.status(401).send("Incomplete data");

  const typeMuscle = new TypeMuscle({
    typeMuscle: req.body.typeMuscle,
  });

  const result = await typeMuscle.save();
  if(!result) return res.status(401).send("Error creating type muscle")
  return res.status(200).send({ result });
});

// list type muscle
router.get("/getAll", Auth, UserAuth, async (req, res) => {
  const typeMuscle = await TypeMuscle.find();
  if (!typeMuscle) return res.status(401).send("Error fetching type muscles");
  return res.status(200).send({ typeMuscle });
});

// Edit type muscle
router.put("/edit", Auth, UserAuth, async (req, res) => {
  if (!req.body._id || !req.body.typeMuscle)
    return res.status(401).send("Incomplete data");

  const typeMuscle = await TypeMuscle.findByIdAndUpdate(req.body._id, {
    typeMuscle: req.body.typeMuscle,
    status: true,
  });
  if (!typeMuscle) return res.status(401).send("Error updating type muscle");
  return res.status(200).send({ typeMuscle });
});

// delete type muscle
router.put("/delete", Auth, UserAuth, async (req, res) => {
  if (!req.body._id || !req.body.typeMuscle)
    return res.status(401).send("Incomplete data");

  const typeMuscle = await TypeMuscle.findByIdAndUpdate(req.body._id, {
    typeMuscle: req.body.typeMuscle,
    status: false,
  });

  if (!typeMuscle) return res.status(401).send("Error deleting type muscle");
  return res.status(200).send("Deleted type muscle");
});

module.exports = router;
