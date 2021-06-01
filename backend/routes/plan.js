/**
 * Description: routes of the plans
 * Autor: Miguel Angel Cerquera Rodriguez
 * Fecha modificacion: 28/05/2021
 */

const express = require("express");
const router = express.Router();
const Plan = require("../models/plan");
const Auth = require("../middleware/auth");
const UserAuth = require("../middleware/user");

// Create plan
router.post("/add", Auth, UserAuth, async (req, res) => {
    if(!req.body.plan || !req.body.description || !req.body.price) return res.status(401).send("Incomplete data");

    const plan = new Plan({
       plan: req.body.plan,
       description: req.body.description,
       price: req.body.price
    });

    const result = await plan.save();
    if (!result) return res.status(401).send("Error creating plan");
    return res.status(200).send({ result });
});

// Get all plans
router.get("/getAll", Auth, UserAuth, async (req, res) => {
    const plan = await Plan.find();
    if (!plan) return res.status(401).send("Error fetching plan");
    return res.status(200).send({ plan });
});

// Update plan
router.put("/update", Auth, UserAuth, async (req, res) => {
    if(
        !req.body._id ||
        !req.body.plan ||
        !req.body.description ||
        !req.body.price
    ) return res.status(401).send("Incomplete data");

    const plan = await Plan.findByIdAndUpdate(req.body._id, {
        plan: req.body.plan,
        description: req.body.description,
        price: req.body.price,
        status: true
    });

    if (!plan) return res.status(401).send("Error updating plan");
    return res.status(200).send({ plan });
});

// Delete plan
router.put("/delete", Auth, UserAuth, async (req, res) => {
    if(
        !req.body._id ||
        !req.body.plan ||
        !req.body.description ||
        !req.body.price
    ) return res.status(401).send("Incomplete data");

    const plan = await Plan.findByIdAndUpdate(req.body._id, {
        plan: req.body.plan,
        description: req.body.description,
        price: req.body.price,
        status: false
    });

    if (!plan) return res.status(401).send("Error deleting plan");
    return res.status(200).send({ plan });
});

module.exports = router;