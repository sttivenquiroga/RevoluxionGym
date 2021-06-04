const mongoose = require("mongoose");

const citiesSchema = new mongoose.Schema({
    department_id: {type: mongoose.Schema.ObjectId, ref: "departments"},
    city: String,
    status: {type:Boolean, default: true},
    date: {type: Date, default: Date.now}
});

const Cities = mongoose.model("cities", citiesSchema);

module.exports = Cities;