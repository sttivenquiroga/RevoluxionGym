/**
 * Description: routes of the statusPayments
 * Autor: Miguel Angel Cerquera Rodriguez
 * Fecha modificacion: 31/05/2021
 */

 const express = require("express");
 const router = express.Router();
 const StatusPayment = require("../models/statusPayment");
 const Auth = require("../middleware/auth");
 const UserAuth = require("../middleware/user");
 
 // Create statusPayment
 router.post("/add", Auth, UserAuth, async (req, res) => {
    if(!req.body.userId || !req.body.planId) return res.status(401).send("Incomplete data");

    const statusPayment = new StatusPayment({
        userId: req.body.userId,
        planId: req.body.planId
    });

    const result = await statusPayment.save();
    if (!result) return res.status(401).send("Error creating status payment");
    return res.status(200).send({ result });
 });
 
 // Get all statusPayments
 router.get("/getAll", Auth, UserAuth, async (req, res) => {
    const statusPayment = await StatusPayment.find();
    if (!statusPayment) return res.status(401).send("Error fetching status payment");
    return res.status(200).send({ statusPayment });
 });
 
 // Updated statusPayments
 router.put("/update", Auth, UserAuth, async (req, res) => {
   if(!req.body._id || !req.body.userId || !req.body.planId) return res.status(401).send("Incomplete data");

   const result = await StatusPayment.findById(req.body._id);
   if(result.statusPayment) {
      const statusPayment = await StatusPayment.findByIdAndUpdate(req.body._id, {
         userId: req.body.userId,
         planId: req.body.planId,
         payDate: Date.now(),
         statusPayment: false,
         status: true
      });

      if (!statusPayment) return res.status(401).send("Error updating status payment");
      return res.status(200).send({ statusPayment });
   } else {
      return res.status(401).send("Error updating status payment");
   }
 });

 // Delete statusPayment
router.put("/delete", Auth, UserAuth, async (req, res) => {
   if(
      !req.body._id ||
      !req.body.userId ||
      !req.body.planId ||
      !req.body.payDate ||
      !req.body.createdAt
   ) return res.status(401).send("Incomplete data");

   const statusPayments = await StatusPayment.findByIdAndUpdate(req.body._id, {
      userId: req.body.userId,
      planId: req.body.planId,
      payDate: req.body.payDate,
      statusPayment: req.body.statusPayment,
      createdAt: req.body.createdAt,
      status: false
   });

   if (!statusPayments) return res.status(401).send("Error deleting status payment");
   return res.status(200).send({ statusPayments });
});
 
 module.exports = router;