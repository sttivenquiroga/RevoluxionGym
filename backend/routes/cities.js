const express = require("express");
const router = express.Router();
const Cities = require("../models/cities");
const Departments = require("../models/departments");
const Auth = require("../middleware/auth");
const validateCity = require("../middleware/cities");

router.post("/createCity", validateCity, async(req, res) => {
    const city = await Cities.findOne({city: req.body.city});
    if (city) return res.status(401).send("La ciudad ya existe");
    const cities = new Cities({
        department_id: req.body.department_id,
        city: req.body.city,
        status: "true"
    });
    const result = await cities.save();
    return res.status(200).send({result});
});

router.get("/getCities", async(req, res) => {
    const cities = await Cities.find();
    return res.status(200).send({cities})
});

router.get("/getDeptCities", async(req, res) => {
    const department = await Departments.findById(req.body.department_id);
    if (!department) return res.status(401).send("El departamento no existe");
    const cities = await Cities.find({department_id: req.body.department_id});
    return res.status(200).send({cities})
})

router.put("/editCity", validateCity, async(req, res) => {
    const city = await Cities.findByIdAndUpdate(req.body._id, {
        department_id: req.body.department_id,
        city: req.body.city,
        status: req.body.status
    });
    if (!city) return res.status(401).send("No existe la ciudad");
    return res.status(200).send({city});
});

router.delete("/:_id", async(req, res) => {
    const city = await Cities.findByIdAndDelete(req.params._id);
    if (!city) return res.status(401).send("No existe la ciudad");
    return res.status(200).send("Ciudad eliminada");
})

module.exports = router;
