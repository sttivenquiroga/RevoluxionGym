/**
 * Description: routes of the rols
 * Autor: Miguel Angel Cerquera Rodriguez
 * Fecha modificacion: 31/05/2021
 */

 const express = require("express");
 const router = express.Router();
 const Rol = require("../models/rol");
 const Auth = require("../middleware/auth");
 const UserAuth = require("../middleware/user");
 
 // Create rol
 router.post("/add", Auth, UserAuth, async (req, res) => {
    if(!req.body.rol) return res.status(401).send("Incomplete data");

    const rol = new Rol({
      rol: req.body.rol
    });

    const result = await rol.save();
    if (!result) return res.status(401).send("Error creating rol");
    return res.status(200).send({ result });
 });
 
 // Get all rols
 router.get("/getAll", Auth, UserAuth, async (req, res) => {
    const rol = await Rol.find();
    if (!rol) return res.status(401).send("Error fetching rol");
    return res.status(200).send({ rol });
 });
 
 // Update rol
 router.put("/update", Auth, UserAuth, async (req, res) => {
    if(!req.body._id || !req.body.rol) return res.status(401).send("Incomplete data");

    const rol = await Rol.findByIdAndUpdate(req.body._id, {
      rol: req.body.rol,
      status: true
    });

    if (!rol) return res.status(401).send("Error updating plan");
    return res.status(200).send({ rol });
 });

// Delete rol
router.put("/delete", Auth, UserAuth, async (req, res) => {
   if(
       !req.body._id ||
       !req.body.rol
   ) return res.status(401).send("Incomplete data");

   const rol = await Rol.findByIdAndUpdate(req.body._id, {
      rol: req.body.rol,
      status: false
   });

   if (!rol) return res.status(401).send("Error deleting rol");
   return res.status(200).send({ rol });
});
 
 module.exports = router;