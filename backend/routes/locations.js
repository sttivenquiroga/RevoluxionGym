const express = require("express");
const router = express.Router();
const Locations = require("../models/locations");
const Cities = require("../models/cities");
const User = require("../models/user");
const Auth = require("../middleware/auth");
const validateLocation = require("../middleware/locations");

router.post("/createLocation", Auth, validateLocation, async(req,res) => {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(401).send("Error en usuario");
    const location = await Locations.findOne({location: req.body.location});
    if (location) res.status(401).send("La sede ya existe");
    const locations = new Locations({
        city_id: req.body.city_id,
        location: req.body.location,
        address: req.body.address,
        phone: req.body.phone,
        manager_id: req.body.manager_id,
        status: "true"
    })
    const result = await locations.save();
    return res.status(200).send({result});
});

router.get("/getLocations", Auth, async(req, res) => {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(401).send("Error en usuario");
    const locations = await Locations.find();
    return res.status(200).send({locations});
});

router.get("/getCityLocations", Auth, async(req,res) => {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(401).send("Error en usuario");
    const city = await Cities.findById(req.body.city_id);
    if (!city) return res.status(401).send("La ciudad no existe");
    const locations = await Locations.find({city_id: req.body.city_id});
    return res.status(200).send({locations})
})

router.put("/editLocation", Auth, validateLocation, async(req, res) => {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(401).send("Error en usuario");
    const location = await Locations.findByIdAndUpdate(req.body._id, {
        city_id: req.body.city_id,
        location: req.body.location,
        address: req.body.address,
        phone: req.body.phone,
        manager_id: req.body.manager_id,
        status: req.body.status
    })
    if (!location) return res.status(401).send("No existe la sede");
    return res.status(200).send({location})
});

router.delete("/:_id", Auth, async(req, res) => {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(401).send("Error en usuario");
    const location = await Locations.findByIdAndDelete(req.params._id);
    if (!location) return res.status(401).send("No existe la sede");
    return res.status(200).send("Sede eliminada")
});

module.exports = router;
