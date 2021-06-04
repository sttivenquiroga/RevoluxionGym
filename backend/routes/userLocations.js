const express = require("express");
const router = express.Router();

// modelos 
const Auth = require("../middleware/auth");
const UserAuth = require("../middleware/user");
const UserLocations = require("../models/userLocations");
const User = require("../models/user");
const Locations = require("../models/locations");
const Admin = require("../middleware/admin");


// agregar usuarios x sede - URL: http://localhost:3001/api/userLocations/add
router.post("/add", Auth, UserAuth, async(req, res)=>{
    
    if(!req.body.userId || !req.body.locationId) return res.status(401).send("Incomplete data");    

    const validUserId = mongoose.Types.ObjectId.isValid(req.body.userId);
    if(!validUserId) return res.status(401).send("Invalid User ID");

    const validLocationId = mongoose.Types.ObjectId.isValid(req.body.locationId);
    if(!validLocationId) return res.status(401).send("Invalid Location ID"); 

    const existUser = await User.findById(req.body.userId);
    if(!existUser) return res.status(401).send("User doesn't exist")    

    const existLocation = await Locations.findById(req.body.locationId);
    if(!existLocation) return res.status(401).send("location doesn't exist")

    if(existUser.status == false || existLocation.status == false)
        return res.status(401).send("User or Location are disabled")

    const userLocations = new UserLocations({
        userId: req.body.userId,
        locationId: req.body.locationId
    })

    const result = await userLocations.save()
    if(!result) return res.status(401).send("Error creating")
    return res.status(200).send({result});
})


// ver todos los usuarios de todas las sedes - URL: http://localhost:3001/api/userLocations/getAll
router.get("/getAll", Auth, UserAuth, Admin, async(req, res)=>{    

    const userLocations = await UserLocations.find()
    if(!userLocations) return res.status(401).send("Error fetching");

    return res.status(200).send({userLocations});
})


// ver usuarios de una sede - URL: http://localhost:3001/api/userLocations/getUsersLocation
router.post("/getUsersLocation", Auth, UserAuth, Admin, async(req, res)=>{
    
    if(!req.body.locationId) return res.status(401).send("Incomplete data");    

    const existLocation = await Locations.findById(req.body.locationId);
    if(!existLocation) return res.status(401).send("location doesn't exist")

    if(existLocation.status == false)
        return res.status(401).send("Location is disabled")

    const userLocations = await UserLocations.find({locationId: req.body.locationId})
    if(!userLocations) return res.status(401).send("Error fetching");

    return res.status(200).send({userLocations});
})


// editar usuarios x sede - URL: http://localhost:3001/api/userLocations/update
router.put("/update", Auth, UserAuth, async(req, res)=>{    
    
    if(!req.body.userId || !req.body.locationId) return res.status(401).send("Incomplete data");

    const validUserId = mongoose.Types.ObjectId.isValid(req.body.userId);
    if(!validUserId) return res.status(401).send("Invalid User ID");

    const validLocationId = mongoose.Types.ObjectId.isValid(req.body.locationId);
    if(!validLocationId) return res.status(401).send("Invalid Location ID");

    const existUser = await User.findById(req.body.userId);
    if(!existUser) return res.status(401).send("User doesn't exist")

    const existLocation = await Locations.findById(req.body.locationId);
    if(!existLocation) return res.status(401).send("location doesn't exist")

    if(existUser.status == false || existLocation.status == false)
        return res.status(401).send("User or Exercise are disabled")

    const userLocations = await UserLocations.findByIdAndUpdate(req.body._id,{
        userId: req.body.userId,
        locationId: req.body.locationId,
        status: true
    })

    if(!userLocations) return res.status(401).send("Error updating")
    return res.status(200).send({userLocations});
})


// desactivar - URL: http://localhost:3001/api/userLocations/delete
router.put("/delete", Auth, UserAuth, Admin, async(req, res)=>{
    
    if(!req.body.userId || !req.body.locationId) return res.status(401).send("Incomplete data");

    const validUserId = mongoose.Types.ObjectId.isValid(req.body.userId);
    if(!validUserId) return res.status(401).send("Invalid User ID");

    const validLocationId = mongoose.Types.ObjectId.isValid(req.body.locationId);
    if(!validLocationId) return res.status(401).send("Invalid Location ID");

    const existUser = await User.findById(req.body.userId);
    if(!existUser) return res.status(401).send("User doesn't exist")

    const existLocation = await Locations.findById(req.body.locationId);
    if(!existLocation) return res.status(401).send("location doesn't exist")

    if(existUser.status == false || existLocation.status == false)
        return res.status(401).send("User or Exercise are disabled")

    const userLocations = await UserLocations.findByIdAndUpdate(req.body._id,{
        userId: req.body.userId,
        locationId: req.body.locationId,
        status: false
    })

    if(!userLocations) return res.status(401).send("Error deleting")
    return res.status(200).send({userLocations});
})

module.exports = router;
