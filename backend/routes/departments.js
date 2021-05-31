const express = require("express");
const router = express.Router();
const Departments = require("../models/departments");
const Auth = require("../middleware/auth");
const validateDepartment = require("../middleware/departments");

router.post("/createDepartment", Auth, validateDepartment, async(req, res) => {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(401).send("Error en usuario");
    const department = await Departments.findOne({department: req.body.department})
    if(department) return res.status(401).send("El departamento ya existe");
    const departments = new Departments ({
        department: req.body.department,
        status: "true"
    })
    const result = await departments.save();
    return res.status(200).send({result});
})

router.get("/getDepartments", Auth, async(req, res) => {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(401).send("Error en usuario");
    const departments = await Departments.find();
    return res.status(200).send({departments});
})

router.put("/editDepartment", Auth, validateDepartment, async(req, res) => {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(401).send("Error en usuario");
    const dpt = await Departments.findByIdAndUpdate(req.body._id, {
        department: req.body.department,
        status: req.body.status
    })
    if (!dpt) return res.status(400).send("No existe el departamento");
    return res.status(200).send({dpt})
})

router.delete("/:_id", Auth, async(req, res) => {
    const user = await User.findById(req.user._id);
    if (!user) return res.status(401).send("Error en usuario");
    const department = await Departments.findByIdAndDelete(req.params._id);
    if (!department) return res.status(401).send("No existe el departamento");
    return res.status(200).send("Departamento eliminado");
})

module.exports = router;