/**
 * Description: Model of schema statusPayment
 * Autor: Miguel Angel Cerquera Rodriguez
 * Fecha modificacion: 31/05/2021
 */

 const mongoose = require("mongoose");

 const Schema = new mongoose.Schema({
    userId: { type: mongoose.Schema.ObjectId, ref: "user" },
    planId: { type: mongoose.Schema.ObjectId, ref: "plan" },
    payDate: Date,
    statusPayment: { type: Boolean, default: true },
    date: { type: Date, default: Date.now() },
    status: { type: Boolean, default: true }
 });
 
 const StatusPayment = mongoose.model("statuspayment", Schema);
 
 module.exports = StatusPayment;