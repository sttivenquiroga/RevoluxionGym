const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Locations = require("../models/locations");
const Cities = require("../models/cities");
const Auth = require("../middleware/auth");
const UserAuth = require("../middleware/user");
const AdminAuth = require("../middleware/admin");

router.post("/create", Auth, UserAuth, AdminAuth, async(req,res) => {
    if (!req.body.city_id || 
        !req.body.location ||
        !req.body.address ||
        !req.body.phone ||
        !req.body.manager_id)
        return res.status(401).send("Incomplete data");
    const validCityId = mongoose.Types.ObjectId.isValid(req.body.city_id);
    if (!validCityId) return res.status(401).send("Rejected request: Invalid City Id");
    const validManagerId = mongoose.Types.ObjectId.isValid(req.body.manager_id);
    if (!validManagerId) return res.status(401).send("Rejected request: Invalid Manager Id");
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
    if (!result) return res.status(401).send("Error creating location");
    return res.status(200).send({result});
});

router.get("/getAll", Auth, UserAuth, async(req, res) => {
    const locations = await Locations.find();
    if (!locations) return res.status(401).send("Error fecthing locations");
    return res.status(200).send({locations});
});

router.get("/getByCity", Auth, UserAuth, async(req,res) => {
    const city = await Cities.findById(req.body.city_id);
    if (!city) return res.status(401).send("Error fetching locations");
    const validId = mongoose.Types.ObjectId.isValid(req.body.city_id);
    if (!validId) return res.status(401).send("Rejected request: Invalid Id");
    const locations = await Locations.find({city_id: req.body.city_id});
    if (!locations) return res.status(401).send("Error fetching locations");
    return res.status(200).send({locations})
})

router.put("/edit", Auth, UserAuth, AdminAuth, async(req, res) => {
    if (!req.body.city_id || 
        !req.body.location ||
        !req.body.address ||
        !req.body.phone ||
        !req.body.manager_id)
        return res.status(401).send("Incomplete data");
    const validCityId = mongoose.Types.ObjectId.isValid(req.body.city_id);
    if (!validCityId) return res.status(401).send("Rejected request: Invalid City Id");
    const validManagerId = mongoose.Types.ObjectId.isValid(req.body.manager_id);
    if (!validManagerId) return res.status(401).send("Rejected request: Invalid Manager Id");
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

router.put("/delete", Auth, UserAuth, AdminAuth, async(req, res) => {
    if (!req.body.city_id || 
        !req.body.location ||
        !req.body.address ||
        !req.body.phone ||
        !req.body.manager_id)
        return res.status(401).send("Incomplete data");
    const validCityId = mongoose.Types.ObjectId.isValid(req.body.city_id);
    if (!validCityId) return res.status(401).send("Rejected request: Invalid City Id");
    const validManagerId = mongoose.Types.ObjectId.isValid(req.body.manager_id);
    if (!validManagerId) return res.status(401).send("Rejected request: Invalid Manager Id");
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