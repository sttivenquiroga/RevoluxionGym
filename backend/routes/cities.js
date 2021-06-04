const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Cities = require("../models/cities");
const Departments = require("../models/departments");
const Auth = require("../middleware/auth");
const UserAuth = require("../middleware/user");
const AdminAuth = require("../middleware/admin");

router.post("/create", Auth, UserAuth, AdminAuth, async(req, res) => {
    if (!req.body.departmentId || !req.body.city)
        return res.status(401).send("Incomplete data");
    const validId = mongoose.Types.ObjectId.isValid(req.body.departmentId);
    if (!validId) return res.status(401).send("Rejected request: Invalid Id");
    const city = await Cities.findOne({city: req.body.city});
    if (city || (city && city.status == false)) 
        return res.status(401).send("Existent city or status disabled");
    const cities = new Cities({
        departmentId: req.body.departmentId,
        city: req.body.city,
    });
    const result = await cities.save();
    if (!result) return res.status(401).send("Error creating city");
    return res.status(200).send({result});
});

router.get("/getAll/:name?", Auth, UserAuth, async(req, res) => {
    const cities = await Cities.find({city: new RegExp(req.params["name"], "i")})
    .populate("departmentId", "department")
    .exec();
    if (!cities) return res.status(401).send("Error fetching cities");
    return res.status(200).send({cities})
});

router.get("/getByDept", Auth, UserAuth, async(req, res) => {
    const department = await Departments.findById(req.body.departmentId);
    if (!department) return res.status(401).send("Error fetching cities");
    const validId = mongoose.Types.ObjectId.isValid(req.body.departmentId);
    if (!validId) return res.status(401).send("Rejected request: Invalid Id");
    const cities = await Cities.find({departmentId: req.body.departmentId});
    if (!cities) return res.status(401).send("Error fetching cities");
    return res.status(200).send({cities})
})

router.put("/edit", Auth, UserAuth, AdminAuth, async(req, res) => {
    if (!req.body.departmentId || !req.body.city)
        return res.status(401).send("Incomplete data");
    const validId = mongoose.Types.ObjectId.isValid(req.body.departmentId);
    if (!validId) return res.status(401).send("Rejected request: Invalid Id");
    const city = await Cities.findByIdAndUpdate(req.body._id, {
        departmentId: req.body.departmentId,
        city: req.body.city,
        status: true
    });
    if (!city) return res.status(401).send("Error editing city");
    return res.status(200).send({city});
});

router.put("/delete", Auth, UserAuth, AdminAuth, async(req, res) => {
    if (!req.body.departmentId || !req.body.city)
        return res.status(401).send("Incomplete data");
    const validId = mongoose.Types.ObjectId.isValid(req.body.departmentId);
    if (!validId) return res.status(401).send("Rejected request: Invalid Id");
    const city = await Cities.findByIdAndUpdate(req.body._id, {
        departmentId: req.body.departmentId,
        city: req.body.city,
        status: false
    });
    if (!city) return res.status(401).send("Error deleting city");
    return res.status(200).send("Deleted city");
})

module.exports = router;