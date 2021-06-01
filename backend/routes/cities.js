const express = require("express");
const router = express.Router();
const Cities = require("../models/cities");
const Departments = require("../models/departments");
const Auth = require("../middleware/auth");
const UserAuth = require("../middleware/user");

router.post("/create", Auth, UserAuth, async(req, res) => {
    if (!req.body.department_id || !req.body.city)
        return res.status(401).send("Incomplete data");
    const city = await Cities.findOne({city: req.body.city});
    if (city || (city && city.status == false)) 
        return res.status(401).send("Existent city or status disabled");
    const cities = new Cities({
        department_id: req.body.department_id,
        city: req.body.city,
    });
    const result = await cities.save();
    return res.status(200).send({result});
});

router.get("/getAll", Auth, UserAuth, async(req, res) => {
    const cities = await Cities.find();
    return res.status(200).send({cities})
});

router.get("/getByDept", Auth, UserAuth, async(req, res) => {
    const department = await Departments.findById(req.body.department_id);
    if (!department) return res.status(401).send("Error fetching cities");
    const cities = await Cities.find({department_id: req.body.department_id});
    return res.status(200).send({cities})
})

router.put("/edit", Auth, UserAuth, async(req, res) => {
    if (!req.body.department_id || !req.body.city)
        return res.status(401).send("Incomplete data");
    const city = await Cities.findByIdAndUpdate(req.body._id, {
        department_id: req.body.department_id,
        city: req.body.city,
        status: true
    });
    if (!city) return res.status(401).send("Error editing city");
    return res.status(200).send({city});
});

router.put("/delete", Auth, UserAuth, async(req, res) => {
    if (!req.body.department_id || !req.body.city)
        return res.status(401).send("Incomplete data");
    const city = await Cities.findByIdAndUpdate(req.body._id, {
        department_id: req.body.department_id,
        city: req.body.city,
        status: false
    });
    if (!city) return res.status(401).send("Error deleting city");
    return res.status(200).send("Deleted city");
})

module.exports = router;
