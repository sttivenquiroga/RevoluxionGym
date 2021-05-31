const mongoose = require("mongoose");

const citiesSchema = new mongoose.Schema({
    department_id: String,
    city: String,
    status: Boolean
});

const Cities = mongoose.model("cities", citiesSchema);

module.exports = Cities;