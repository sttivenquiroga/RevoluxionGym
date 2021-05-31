/**
 * Description: routes of the plans
 * Autor: Miguel Angel Cerquera Rodriguez
 * Fecha modificacion: 28/05/2021
 */

const express = require("express");
const router = express.Router();
const Plan = require("../models/plan");
const User = require("../models/user");
const Auth = require("../middleware/auth");

let user = {};

// Created plans
router.post("/add", Auth, async (req, res) => {
    !await valiUser(req) ? res.status(400).send("Usuario no autenticado") : user = valiUser(req);
    if(Object.keys(req.body).length === 0) return res.status(401).send("No vienen campos");
    if(!req.body.plan || !req.body.description || !req.body.price) return res.status(401).send("Faltan campos");
    const plan = new Plan({
       plan: req.body.plan,
       description: req.body.description,
       price: req.body.price
    });
    const result = await plan.save();
    if (!result) return res.status(401).send("No se pudo agregar el plan");
    return res.status(200).send({ result });
});

// Read plans
router.get("/list", Auth, async (req, res) => {
    !await valiUser(req) ? res.status(400).send("Usuario no autenticado") : user = valiUser(req);
    const plan = await Plan.find();
    return res.status(200).send({ plan });
});

// Updated plans
router.put("/update", Auth, async (req, res) => {
    !await valiUser(req) ? res.status(400).send("Usuario no autenticado") : user = valiUser(req);
    if(Object.keys(req.body).length === 0) return res.status(401).send("No vienen campos");
    if(!req.body.plan || !req.body.description || !req.body.price || !req.body._id) return res.status(401).send("Faltan campos");
    const plan = await Plan.findByIdAndUpdate(req.body._id, {
        plan: req.body.plan,
        description: req.body.description,
        price: req.body.price
    });
    if (!plan) return res.status(401).send("No se pudo editar el plan");
    return res.status(200).send({ plan });
});

// Delete plans
router.delete("/:_id", Auth, async (req, res) => {
    !await valiUser(req) ? res.status(400).send("Usuario no autenticado") : user = valiUser(req);
    const plan = await Plan.findByIdAndDelete(req.params._id);
    if (!plan) return res.status(401).send("No se pudo eliminar el plan");
    return res.status(200).send("Plan eliminado");
});

const valiUser = async (req) => {
    return await User.findById(req.user._id);
};

module.exports = router;