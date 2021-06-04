/**
 * Description: routes of the statusPayments
 * Autor: Miguel Angel Cerquera Rodriguez
 * Fecha modificacion: 4/06/2021
 */

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const StatusPayment = require("../models/statusPayment");
const User = require("../models/user");
const Auth = require("../middleware/auth");
const UserAuth = require("../middleware/user");
const Admin = require("../middleware/admin");

// Create statusPayment
router.post("/add", Auth, UserAuth, async (req, res) => {
  if (!req.body.userId || !req.body.planId)
    return res.status(401).send("Incomplete data");

  const validId = mongoose.Types.ObjectId.isValid(req.body.userId);
  if (!validId) return res.status(401).send("Process failed: Invalid id");

  const validId = mongoose.Types.ObjectId.isValid(req.body.planId);
  if (!validId) return res.status(401).send("Process failed: Invalid id");

  const exist = await User.findById(req.body.userId);
  if (!exist) return res.status(401).send("Process failed: user doesn't exist");

  const exist = await User.findById(req.body.planId);
  if (!exist) return res.status(401).send("Process failed: plan doesn't exist");

  const statusPayment = new StatusPayment({
    userId: req.body.userId,
    planId: req.body.planId,
  });

  const result = await statusPayment.save();
  if (!result) return res.status(401).send("Error creating status payment");
  res.status(200).send({ result });
});

// Get all statusPayments
router.get("/getAll", Auth, UserAuth, Admin, async (req, res) => {
  const statusPayment = await StatusPayment.find();
  if (!statusPayment)
    return res.status(401).send("Error fetching status payment");
  res.status(200).send({ statusPayment });
});

// Updated statusPayments
router.put("/update", Auth, UserAuth, async (req, res) => {
  if (!req.body._id || !req.body.userId || !req.body.planId)
    return res.status(401).send("Incomplete data");

  const validId = mongoose.Types.ObjectId.isValid(req.body._id);
  if (!validId) return res.status(401).send("Process failed: Invalid id");

  const validId = mongoose.Types.ObjectId.isValid(req.body.userId);
  if (!validId) return res.status(401).send("Process failed: Invalid id");

  const validId = mongoose.Types.ObjectId.isValid(req.body.planId);
  if (!validId) return res.status(401).send("Process failed: Invalid id");

  const exist = await User.findById(req.body.userId);
  if (!exist) return res.status(401).send("Process failed: user doesn't exist");

  const exist = await User.findById(req.body.planId);
  if (!exist) return res.status(401).send("Process failed: plan doesn't exist");

  const result = await StatusPayment.findById(req.body._id);
  if (!result && result.statusPayment) {
    const statusPayment = await StatusPayment.findByIdAndUpdate(req.body._id, {
      userId: req.body.userId,
      planId: req.body.planId,
      payDate: Date.now(),
      statusPayment: false,
      status: true,
    });

    if (!statusPayment)
      return res.status(401).send("Error updating status payment");
    res.status(200).send({ statusPayment });
  } else {
    res.status(401).send("Error updating status payment");
  }
});

// Delete statusPayment
router.put("/delete", Auth, UserAuth, Admin, async (req, res) => {
  if (
    !req.body._id ||
    !req.body.userId ||
    !req.body.planId ||
    !req.body.payDate ||
    req.body.statusPayment === undefined
  )
    return res.status(401).send("Incomplete data");

  const validId = mongoose.Types.ObjectId.isValid(req.body._id);
  if (!validId) return res.status(401).send("Process failed: Invalid id");

  const validId = mongoose.Types.ObjectId.isValid(req.body.userId);
  if (!validId) return res.status(401).send("Process failed: Invalid id");

  const validId = mongoose.Types.ObjectId.isValid(req.body.planId);
  if (!validId) return res.status(401).send("Process failed: Invalid id");

  const exist = await User.findById(req.body.userId);
  if (!exist) return res.status(401).send("Process failed: user doesn't exist");

  const exist = await User.findById(req.body.planId);
  if (!exist) return res.status(401).send("Process failed: plan doesn't exist");

  const statusPayments = await StatusPayment.findByIdAndUpdate(req.body._id, {
    userId: req.body.userId,
    planId: req.body.planId,
    payDate: req.body.payDate,
    statusPayment: req.body.statusPayment,
    status: false,
  });

  if (!statusPayments)
    return res.status(401).send("Error deleting status payment");
  res.status(200).send({ statusPayments });
});

module.exports = router;
