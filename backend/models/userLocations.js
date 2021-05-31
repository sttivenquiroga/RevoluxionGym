const moogose = require("mongoose");

// usuarios sedes
const userLocationsShema = moogose.Schema({
    userId: String,
    locationId: String,
    status: {type:Boolean, default: true}
})

const UserLocation = moogose.model("userLocations", userLocationsShema);

module.exports = UserLocation;