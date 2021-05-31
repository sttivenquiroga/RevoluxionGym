/**
 * Description: routes of the statusPayments
 * Autor: Miguel Angel Cerquera Rodriguez
 * Fecha modificacion: 31/05/2021
 */

 const express = require("express");
 const router = express.Router();
 const StatusPayment = require("../models/statusPayment");
 const User = require("../models/user");
 const Auth = require("../middleware/auth");
 
 let user = {};
 
 // Created statusPayments
 router.post("/add", Auth, async (req, res) => {
    !await valiUser(req) ? res.status(400).send("Usuario no autenticado") : user = valiUser(req);
    if(Object.keys(req.body).length === 0) return res.status(401).send("No vienen campos");
    if(!req.body.userId || !req.body.planId) return res.status(401).send("Faltan campos");
    const statusPayment = new StatusPayment({
        userId: req.body.userId,
        planId: req.body.planId
    });
    const result = await statusPayment.save();
    if (!result) return res.status(401).send("No se pudo agregar el estado de pago");
    return res.status(200).send({ result });
 });
 
 // Read statusPayments
 router.get("/list", Auth, async (req, res) => {
    !await valiUser(req) ? res.status(400).send("Usuario no autenticado") : user = valiUser(req);
    const statusPayment = await StatusPayment.find();
    return res.status(200).send({ statusPayment });
 });
 
 // Updated statusPayments
 router.put("/update", Auth, async (req, res) => {
   !await valiUser(req) ? res.status(400).send("Usuario no autenticado") : user = valiUser(req);
   if(Object.keys(req.body).length === 0) return res.status(401).send("No vienen campos");
   if(!req.body.userId || !req.body.planId || !req.body._id) return res.status(401).send("Faltan campos");
   const result = await StatusPayment.findById(req.body._id);
   if(result.statusPayment) {
      const statusPayment = await StatusPayment.findByIdAndUpdate(req.body._id, {
         userId: req.body.userId,
         planId: req.body.planId,
         payDate: Date.now(),
         statusPayment: false
      });
      if (!statusPayment) return res.status(401).send("No se pudo editar el estado de pago");
      return res.status(200).send({ statusPayment });
   } else {
      return res.status(401).send("No se pudo editar el estado de pago");
   }
 });
 
 // Delete statusPayments
 router.delete("/:_id", Auth, async (req, res) => {
    !await valiUser(req) ? res.status(400).send("Usuario no autenticado") : user = valiUser(req);
    const statusPayments = await StatusPayment.findByIdAndDelete(req.params._id);
    if (!statusPayments) return res.status(401).send("No se pudo eliminar el estado de pago");
    return res.status(200).send("Estado de pago eliminado");
 });
 
 const valiUser = async (req) => {
    return await User.findById(req.user._id);
 };
 
 module.exports = router;