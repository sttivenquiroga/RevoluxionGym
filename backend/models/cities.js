const mongoose = require("mongoose");

const citiesSchema = new mongoose.Schema({
    department_id: String,
    city: String,
    status: {type:Boolean, default: true}
});

const Cities = mongoose.model("cities", citiesSchema);

module.exports = Cities;