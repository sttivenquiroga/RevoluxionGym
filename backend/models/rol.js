/**
 * Description: Model of schema rol
 * Autor: Miguel Angel Cerquera Rodriguez
 * Fecha modificacion: 31/05/2021
 */

 const mongoose = require("mongoose");

 const Schema = new mongoose.Schema({
     rol: String,
     description: String,
     date: { type: Date, default: Date.now() },
     status: { type: Boolean, default: true }
 });
 
 const Rol = mongoose.model("rol", Schema);
 
 module.exports = Rol;