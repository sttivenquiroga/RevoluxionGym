const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Exercise = require("../models/exercise");
const Auth = require("../middleware/auth");
const UserAuth = require("../middleware/user");
const AdminAuth = require("../middleware/admin");

const multipart = require("connect-multiparty");
const mult = multipart();
const fs = require("fs");
const path = require("path");
const moment = require("moment");
const Upload = require("../middleware/file");

// Save  exercise
router.post("/create", mult, Upload, Auth, UserAuth, async (req, res) => {
  if (
    !req.body.typeExerciseId ||
    !req.body.typeMuscleId ||
    !req.body.exercise ||
    !req.body.description
  )
    return res.status(401).send("Incomplete data");

  let imageUrl = "";
  if (req.files !== undefined && req.files.image.type) {
    const url = req.protocol + "://" + req.get("host") + "/";
    let serverImg =
      "./uploads/exercise/" +
      moment().unix() +
      path.extname(req.files.image.path);
    fs.createReadStream(req.files.image.path).pipe(
      fs.createWriteStream(serverImg)
    );
    imageUrl =
      url +
      "uploads/exercise/" +
      moment().unix() +
      path.extname(req.files.image.path);
  }

  const exercise = new Exercise({
    typeExerciseId: req.body.typeExerciseId,
    typeMuscleId: req.body.typeMuscleId,
    exercise: req.body.exercise,
    description: req.body.description,
    img: imageUrl,
  });

  const result = await exercise.save();
  if (!result) return res.status(401).send("Error creating exercise");
  return res.status(200).send({ result });
});

// list exercises
router.get("/getAll/:name?", async (req, res) => {

  const exercise = await Exercise.find({
    exercise: new RegExp(req.params["name"], "i")})
    .populate("typeExerciseId", "typeExercise")
    .populate("typeMuscleId", "typeMuscle")
    .exec();
  if (!exercise) return res.status(401).send("Error fetching exercises");
  return res.status(200).send({ exercise });
});

// Edit exercises
router.put("/edit", Auth, UserAuth, AdminAuth, async (req, res) => {
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
router.put("/delete", Auth, UserAuth, AdminAuth, async (req, res) => {
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
