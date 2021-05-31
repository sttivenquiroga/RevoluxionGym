const express = require("express");
const router = express.Router();
const Cities = require("../models/cities");
const Departments = require("../models/departments");
const Auth = require("../middleware/auth");
const validateCity = require("../middleware/cities");

router.post("/createCity", Auth, validateCity, async(req, res) => {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(401).send("Error en usuario");
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

router.get("/getCities", Auth, async(req, res) => {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(401).send("Error en usuario");
    const cities = await Cities.find();
    return res.status(200).send({cities})
});

router.get("/getDeptCities", Auth, async(req, res) => {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(401).send("Error en usuario");
    const department = await Departments.findById(req.body.department_id);
    if (!department) return res.status(401).send("El departamento no existe");
    const cities = await Cities.find({department_id: req.body.department_id});
    return res.status(200).send({cities})
})

router.put("/editCity", Auth, validateCity, async(req, res) => {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(401).send("Error en usuario");
    const city = await Cities.findByIdAndUpdate(req.body._id, {
        department_id: req.body.department_id,
        city: req.body.city,
        status: req.body.status
    });
    if (!city) return res.status(401).send("No existe la ciudad");
    return res.status(200).send({city});
});

router.delete("/:_id", Auth, async(req, res) => {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(401).send("Error en usuario");
    const city = await Cities.findByIdAndDelete(req.params._id);
    if (!city) return res.status(401).send("No existe la ciudad");
    return res.status(200).send("Ciudad eliminada");
})

module.exports = router;
