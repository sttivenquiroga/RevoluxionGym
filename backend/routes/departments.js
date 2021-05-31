const express = require("express");
const router = express.Router();
const Departments = require("../models/departments");
const Auth = require("../middleware/auth");
const validateDepartment = require("../middleware/departments");

router.post("/createDepartment", validateDepartment, async(req, res) => {
    const department = await Departments.findOne({department: req.body.department})
    if(department) return res.status(401).send("El departamento ya existe");
    const departments = new Departments ({
        department: req.body.department,
        status: "true"
    })
    const result = await departments.save();
    return res.status(200).send({result});
})

router.get("/getDepartments", async(req, res) => {
    const departments = await Departments.find();
    return res.status(200).send({departments});
})

router.put("/editDepartment", validateDepartment, async(req, res) => {
    const dpt = await Departments.findByIdAndUpdate(req.body._id, {
        department: req.body.department,
        status: req.body.status
    })
    if (!dpt) return res.status(400).send("No existe el departamento");
    return res.status(200).send({dpt})
})

router.delete("/:_id", async(req, res) => {
    const department = await Departments.findByIdAndDelete(req.params._id);
    if (!department) return res.status(401).send("No existe el departamento");
    return res.status(200).send("Departamento eliminado");
})

module.exports = router;