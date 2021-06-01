const mongoose = require("mongoose");

const locationsSchema = new mongoose.Schema({
    city_id: String,
    location: String,
    address: String,
    phone: String,
    manager_id: String,
    status: {type:Boolean, default: true}
});

const Locations = mongoose. model("locations", locationsSchema);

module.exports = Locations;