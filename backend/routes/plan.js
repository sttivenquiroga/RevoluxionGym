/**
 * Description: routes of the plans
 * Autor: Miguel Angel Cerquera Rodriguez
 * Fecha modificacion: 4/06/2021
 */

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Plan = require("../models/plan");
const Auth = require("../middleware/auth");
const UserAuth = require("../middleware/user");
const Admin = require("../middleware/admin");

// Create plan
router.post("/add", Auth, UserAuth, Admin, async (req, res) => {
  if (!req.body.plan || !req.body.description || !req.body.price)
    return res.status(401).send("Incomplete data");

  const exist = await Plan.findOne({ plan: req.body.plan });
  if (exist) return res.status(401).send("Process failed: plan already exists");

  const plan = new Plan({
    plan: req.body.plan,
    description: req.body.description,
    price: req.body.price,
  });

  const result = await plan.save();
  if (!result) return res.status(401).send("Error creating plan");
  res.status(200).send({ result });
});

// Get all plans
router.get("/getAll/:name?", Auth, UserAuth, Admin, async (req, res) => {
  const plan = await Plan.find({ plan: new RegExp(req.params["name"], "i") });
  if (!plan) return res.status(401).send("Error fetching plan");
  res.status(200).send({ plan });
});

// Update plan
router.put("/update", Auth, UserAuth, Admin, async (req, res) => {
  if (
    !req.body._id ||
    !req.body.plan ||
    !req.body.description ||
    !req.body.price
  )
    return res.status(401).send("Incomplete data");

  const validId = mongoose.Types.ObjectId.isValid(req.body._id);
  if (!validId) return res.status(401).send("Process failed: Invalid id");

  const plan = await Plan.findByIdAndUpdate(req.body._id, {
    plan: req.body.plan,
    description: req.body.description,
    price: req.body.price,
    status: true,
  });

  if (!plan) return res.status(401).send("Error updating plan");
  res.status(200).send({ plan });
});

// Delete plan
router.put("/delete", Auth, UserAuth, async (req, res) => {
  if (
    !req.body._id ||
    !req.body.plan ||
    !req.body.description ||
    !req.body.price
  )
    return res.status(401).send("Incomplete data");

  const validId = mongoose.Types.ObjectId.isValid(req.body._id);
  if (!validId) return res.status(401).send("Process failed: Invalid id");

  const plan = await Plan.findByIdAndUpdate(req.body._id, {
    plan: req.body.plan,
    description: req.body.description,
    price: req.body.price,
    status: false,
  });

  if (!plan) return res.status(401).send("Error deleting plan");
  res.status(200).send("Deleted plan");
});

module.exports = router;
