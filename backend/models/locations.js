const mongoose = require("mongoose");

const locationsSchema = new mongoose.Schema({
    cityId: {type: mongoose.Schema.ObjectId, ref: "cities"},
    location: String,
    address: String,
    phone: String,
    managerId: String,
    status: {type:Boolean, default: true},
    date: {type: Date, default: Date.now}
});

const Locations = mongoose. model("locations", locationsSchema);

module.exports = Locations;