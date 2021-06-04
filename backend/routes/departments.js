const express = require("express");
const router = express.Router();
const Departments = require("../models/departments");
const Auth = require("../middleware/auth");
const UserAuth = require("../middleware/user");
const AdminAuth = require("../middleware/admin");

router.post("/create", Auth, UserAuth, AdminAuth, async(req, res) => {
    if (!req.body.department)
        return res.status(401).send("Incomplete data");
    const department = await Departments.findOne({department: req.body.department})
    if(department || (department && department.status == false)) 
        return res.status(401).send("Existent department or Status disabled");
    const departments = new Departments ({
        department: req.body.department
    })
    const result = await departments.save();
    if (!result) return res.status(401).send("Error creating department");
    return res.status(200).send({result});
})

router.get("/get/:name?", Auth, UserAuth, async(req, res) => {
    const departments = await Departments.find({department: new RegExp(req.params["name"], "i")});
    if (!departments) return res.status(401).send("Error fetching departments");
    return res.status(200).send({departments});
})

router.put("/edit", Auth, UserAuth, AdminAuth, async(req, res) => {
    if (!req.body.department)
        return res.status(401).send("Incomplete data");
    const dpt = await Departments.findByIdAndUpdate(req.body._id, {
        department: req.body.department,
        status: true
    })
    if (!dpt) return res.status(400).send("Error editing department");
    return res.status(200).send({dpt})
})

router.put("/delete", Auth, UserAuth, AdminAuth, async(req, res) => {
    if (!req.body.department)
        return res.status(401).send("Incomplete data");
    const department = await Departments.findByIdAndUpdate(req.body._id, {
        department: req.body.department,
        status: false
    });
    if (!department) return res.status(401).send("Error deleting department");
    return res.status(200).send("Deleted department");
})

module.exports = router;