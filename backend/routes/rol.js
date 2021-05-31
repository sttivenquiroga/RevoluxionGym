/**
 * Description: routes of the rols
 * Autor: Miguel Angel Cerquera Rodriguez
 * Fecha modificacion: 31/05/2021
 */

 const express = require("express");
 const router = express.Router();
 const Rol = require("../models/rol");
 const User = require("../models/user");
 const Auth = require("../middleware/auth");
 
 let user = {};
 
 // Created rols
 router.post("/add", Auth, async (req, res) => {
    !await valiUser(req) ? res.status(400).send("Usuario no autenticado") : user = valiUser(req);
    if(Object.keys(req.body).length === 0) return res.status(401).send("No vienen campos");
    if(!req.body.rol) return res.status(401).send("Faltan campos");
    const rol = new Rol({
      rol: req.body.rol
    });
    const result = await rol.save();
    if (!result) return res.status(401).send("No se pudo agregar el rol");
    return res.status(200).send({ result });
 });
 
 // Read rols
 router.get("/list", Auth, async (req, res) => {
    !await valiUser(req) ? res.status(400).send("Usuario no autenticado") : user = valiUser(req);
    const rol = await Rol.find();
    return res.status(200).send({ rol });
 });
 
 // Updated rols
 router.put("/update", Auth, async (req, res) => {
    !await valiUser(req) ? res.status(400).send("Usuario no autenticado") : user = valiUser(req);
    if(Object.keys(req.body).length === 0) return res.status(401).send("No vienen campos");
    if(!req.body.rol || !req.body._id) return res.status(401).send("Faltan campos");
    const rol = await Rol.findByIdAndUpdate(req.body._id, {
      rol: req.body.rol
    });
    if (!rol) return res.status(401).send("No se pudo editar el rol");
    return res.status(200).send({ rol });
 });
 
 // Delete rols
 router.delete("/:_id", Auth, async (req, res) => {
    !await valiUser(req) ? res.status(400).send("Usuario no autenticado") : user = valiUser(req);
    const rol = await Rol.findByIdAndDelete(req.params._id);
    if (!rol) return res.status(401).send("No se pudo eliminar el rol");
    return res.status(200).send("Rol eliminado");
 });
 
 const valiUser = async (req) => {
    return await User.findById(req.user._id);
 };
 
 module.exports = router;