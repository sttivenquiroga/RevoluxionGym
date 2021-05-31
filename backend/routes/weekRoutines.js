const express = require("express");
const router = express.Router();

// import de modelos 
const WeekRoutines = require("../models/weekRoutines");
const User = require("../models/user");
// const Exercise = require("../models/exercise")

// agregar rutina - URL: http://localhost:3001/api/weekRoutines/addWeekRoutines
router.post("/addWeekRoutines", Auth, async(req, res)=>{

    const user = await User.findById(req.user._id)
    if(!user) return res.status(401).send("Usuario no autenticado");

    if(Object.keys(req.body).length === 0) return res.status(401).send("No vienen campos");
    if(!req.body.userId || !req.body.exerciseId || !req.body.note) return res.status(401).send("Faltan campos");

    const weekRoutines = new WeekRoutines({
        userId: req.body.userId,
        exerciseId: req.body.exerciseId,
        note: req.body.note        
    })

    const result = await weekRoutines.save();
    if(!result) return res.status(401).send("Error al crear Rutina")
    return res.status(200).send({result});
})


// ver rutinas de un usuario - URL: http://localhost:3001/api/weekRoutines/viewWeekRoutines
router.get("/viewWeekRoutines", Auth, async(req, res)=>{

    const user = await User.findById(req.user._id)
    if(!user) return res.status(401).send("Usuario no autenticado");    

    const weekRoutines = await WeekRoutines.find({userId: user._id})
    if(!weekRoutines) return res.status(401).send("No se encontraron resultados")

    return res.status(200).send({weekRoutines});
})


// editar rutinas - URL: http://localhost:3001/api/weekRoutines/uploadWeekRoutines
router.put("/uploadWeekRoutines", Auth, async(req, res)=>{

    const user = await User.findById(req.user._id)
    if(!user) return res.status(401).send("Usuario no autenticado");

    if(Object.keys(req.body).length === 0) return res.status(401).send("No vienen campos");
    if(!req.body.userId || !req.body.exerciseId || !req.body.note) return res.status(401).send("Faltan campos");

    const weekRoutines = await WeekRoutines.findByIdAndUpdate(req.body._id,{
        userId: req.body.userId,
        exerciseId: req.body.exerciseId,
        note: req.body.note 
    })

    if(!weekRoutines) return res.status(401).send("No se pudo editar la rutina")
    return res.status(200).send({weekRoutines});
    
})


//eliminar rutina - URL: http://localhost:3001/api/documentType/:_id
router.delete("/:_id", Auth, async(req, res)=>{

    const user = await User.findById(req.user._id)
    if(!user) return res.status(401).send("Usuario no autenticado");

    const weekRoutines = await WeekRoutines.findByIdAndRemove(req.params._id)
    if(!weekRoutines) return res.status(401).send("No se pudo eliminar la rutina")
    return res.status(200).send("Eliminado correctamente")
})

module.exports = router;