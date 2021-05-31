const express = require("express");
const router = express.Router();

// modelos 
const UserLocations = require("../models/userLocations");
const User = require("../models/user");
const Auth = require("../middleware/auth");


// agregar usuarios x sede - URL: http://localhost:3001/api/userLocations/addUserLocations
router.post("/addUserLocations", Auth, async(req, res)=>{

    const user = await User.findById(req.user._id)
    if(!user) return res.status(401).send("Usuario no autenticado");

    if(Object.keys(req.body).length === 0) return res.status(401).send("No vienen campos");
    if(!req.body.userId || !req.body.locationId) return res.status(401).send("Faltan campos");

    const userLocations = new UserLocations({
        userId: req.body.userId,
        locationId: req.body.locationId
    })

    const result = await userLocations.save()
    if(!result) return res.status(401).send("Error, no se pudo crear")
    return res.status(200).send({result});
})


// ver usuarios de una sede - URL: http://localhost:3001/api/userLocations/viewUserLocations
router.post("/viewUserLocations", Auth, async(req, res)=>{

    const user = await User.findById(req.user._id)
    if(!user) return res.status(401).send("Usuario no autenticado");

    const userLocations = await UserLocations.find({locationId: req.body.locationId})
    if(!userLocations) return res.status(401).send("No se encontraron resultados");

    return res.status(200).send({userLocations});
})


// editar usuarios x sede - URL: http://localhost:3001/api/userLocations/uploadUserLocations
router.put("/uploadUserLocations", Auth, async(req, res)=>{

    const user = await User.findById(req.user._id)
    if(!user) return res.status(401).send("Usuario no autenticado");

    if(Object.keys(req.body).length === 0) return res.status(401).send("No vienen campos");
    if(!req.body.userId || !req.body.locationId) return res.status(401).send("Faltan campos");

    const userLocations = await UserLocations.findByIdAndUpdate(req.body._id,{
        userId: req.body.userId,
        locationId: req.body.locationId,
        status: req.body.status
    })

    if(!userLocations) return res.status(401).send("No se pudo editar")
    return res.status(200).send({userLocations});
})



// eliminar usuarios x sede - URL: http://localhost:3001/api/userLocations/:_id
router.delete("/:_id", Auth, async(req, res)=>{

    const user = await User.findById(req.user._id)
    if(!user) return res.status(401).send("Usuario no autenticado");

    const userLocations = await UserLocations.findOneAndRemove(req.params._id);
    if(!userLocations) return res.status(401).send("No se pudo eliminar");
    return res.status(200).send("Eliminado correctamente");

})


module.exports = router;
