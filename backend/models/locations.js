const mongoose = require("mongoose");

const locationsSchema = new mongoose.Schema({
    city_id: {type: mongoose.Schema.ObjectId, ref: "cities"},
    location: String,
    address: String,
    phone: String,
    manager_id: String,
    status: {type:Boolean, default: true},
    date: {type: Date, default: Date.now}
});

const Locations = mongoose. model("locations", locationsSchema);

module.exports = Locations;