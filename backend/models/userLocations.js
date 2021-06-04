const mongoose = require("mongoose");

// usuarios sedes
const userLocationsShema = mongoose.Schema({
    userId: { type: mongoose.Schema.ObjectId, ref: "users" },
    locationId: { type: mongoose.Schema.ObjectId, ref: "locations" },
    status: {type:Boolean, default: true},
    date: {type:Date, default: Date.now},
})

const UserLocation = mongoose.model("userLocations", userLocationsShema);

module.exports = UserLocation;