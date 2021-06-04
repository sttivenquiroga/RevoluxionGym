/**
 * Description: Model of schema plan
 * Autor: Miguel Angel Cerquera Rodriguez
 * Fecha modificacion: 28/05/2021
 */

const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    plan: String,
    description: String,
    price: Number,
    date: { type: Date, default: Date.now() },
    status: { type: Boolean, default: true }
});

const Plan = mongoose.model("plan", Schema);

module.exports = Plan;