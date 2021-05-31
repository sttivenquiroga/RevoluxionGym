const mongoose = require("mongoose");

// Rutinas Semana 
const weekRoutinesSchema = mongoose.Schema({
    userId: String,
    exerciseId: String,
    note: String,
    calendar: {type:Date, default: Date.now},
    status: {type:Boolean, default: true}
})

const WeekRoutines = mongoose.model("weekRoutines", weekRoutinesSchema);

module.exports = WeekRoutines;