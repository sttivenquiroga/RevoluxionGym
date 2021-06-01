const express = require("express");
const router = express.Router();
const Locations = require("../models/locations");
const Cities = require("../models/cities");
const Auth = require("../middleware/auth");
const UserAuth = require("../middleware/user");

router.post("/create", Auth, UserAuth, async(req,res) => {
    if (!req.body.city_id || 
        !req.body.location ||
        !req.body.address ||
        !req.body.phone ||
        !req.body.manager_id)
        return res.status(401).send("Incomplete data");
    const location = await Locations.findOne({location: req.body.location});
    if (location || (location && location.status == false)) 
        return res.status(401).send("Existent location or status disable");
    const locations = new Locations({
        city_id: req.body.city_id,
        location: req.body.location,
        address: req.body.address,
        phone: req.body.phone,
        manager_id: req.body.manager_id
    })
    const result = await locations.save();
    return res.status(200).send({result});
});

router.get("/getAll", Auth, UserAuth, async(req, res) => {
    const locations = await Locations.find();
    return res.status(200).send({locations});
});

router.get("/getByCity", Auth, UserAuth, async(req,res) => {
    const city = await Cities.findById(req.body.city_id);
    if (!city) return res.status(401).send("Error fetching locations");
    const locations = await Locations.find({city_id: req.body.city_id});
    return res.status(200).send({locations})
})

router.put("/edit", Auth, UserAuth, async(req, res) => {
    if (!req.body.city_id || 
        !req.body.location ||
        !req.body.address ||
        !req.body.phone ||
        !req.body.manager_id)
        return res.status(401).send("Incomplete data");
    const location = await Locations.findByIdAndUpdate(req.body._id, {
        city_id: req.body.city_id,
        location: req.body.location,
        address: req.body.address,
        phone: req.body.phone,
        manager_id: req.body.manager_id,
        status: true
    })
    if (!location) return res.status(401).send("Error updating location");
    return res.status(200).send({location})
});

router.put("/delete", Auth, UserAuth, async(req, res) => {
    if (!req.body.city_id || 
        !req.body.location ||
        !req.body.address ||
        !req.body.phone ||
        !req.body.manager_id)
        return res.status(401).send("Incomplete data");
    const location = await Locations.findByIdAndUpdate(req.body._id, {
        city_id: req.body.city_id,
        location: req.body.location,
        address: req.body.address,
        phone: req.body.phone,
        manager_id: req.body.manager_id,
        status: false
    });
    if (!location) return res.status(401).send("Error deleting location");
    return res.status(200).send("Deleted location")
});

module.exports = router;