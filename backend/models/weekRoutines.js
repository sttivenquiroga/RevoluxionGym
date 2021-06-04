const mongoose = require("mongoose");

// Rutinas Semana 
const weekRoutinesSchema = mongoose.Schema({
    userId: { type: mongoose.Schema.ObjectId, ref: "users" },
    exerciseId: { type: mongoose.Schema.ObjectId, ref: "exercise" },
    note: String,
    calendar: Date,
    status: {type:Boolean, default: true},
    date: {type:Date, default: Date.now},
})

const WeekRoutines = mongoose.model("weekRoutines", weekRoutinesSchema);

module.exports = WeekRoutines;