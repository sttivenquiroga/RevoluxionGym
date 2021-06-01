const express = require("express");
const router = express.Router();

// import de modelos 
const Auth = require("../middleware/auth");
const UserAuth = require("../middleware/user");
const User = require("../models/user");
const WeekRoutines = require("../models/weekRoutines");
const Exercise = require("../models/exercise");

// agregar rutina - URL: http://localhost:3001/api/weekRoutines/add
router.post("/add", Auth, UserAuth ,async(req, res)=>{    

    if(!req.body.userId || !req.body.exerciseId || !req.body.note) return res.status(401).send("Incomplete data");

    const existUser = await User.findById(req.body.userId);
    if(!existUser) return res.status(401).send("User doesn't exist")

    const existExercise = await Exercise.findById(req.body.exerciseId);
    if(!existExercise) return res.status(401).send("Exercise doesn't exist")

    if(existUser.status == false || existExercise.status == false)
        return res.status(401).send("User or Exercise are disabled")

    const weekRoutines = new WeekRoutines({
        userId: req.body.userId,
        exerciseId: req.body.exerciseId,
        note: req.body.note        
    })

    const result = await weekRoutines.save();
    if(!result) return res.status(401).send("Error creating")
    return res.status(200).send({result});
})


// ver todo - URL: http://localhost:3001/api/weekRoutines/getAll
router.get("/getAll", Auth, UserAuth, async(req, res)=>{        
        
    const weekRoutines = await WeekRoutines.find();
    if(!weekRoutines) return res.status(401).send("Error fetching");

    return res.status(200).send({weekRoutines});    
})


// ver rutinas de un usuario - URL: http://localhost:3001/api/weekRoutines/getRoutinesUser
router.get("/getRoutinesUser", Auth, UserAuth, async(req, res)=>{   
        
    const weekRoutines = await WeekRoutines.find({userId: req.user._id});
    if(!weekRoutines) return res.status(401).send("Error fetching");

    return res.status(200).send({weekRoutines});
    
})


// editar rutinas - URL: http://localhost:3001/api/weekRoutines/update
router.put("/update", Auth, UserAuth, async(req, res)=>{
    
    if(!req.body.userId || !req.body.exerciseId || !req.body.note) return res.status(401).send("Incomplete data");

    const existUser = await User.findById(req.body.userId);
    if(!existUser) return res.status(401).send("User doesn't exist")

    const existExercise = await Exercise.findById(req.body.exerciseId);
    if(!existExercise) return res.status(401).send("Exercise doesn't exist")

    if(existUser.status == false || existExercise.status == false)
        return res.status(401).send("User or Exercise are disabled")

    const weekRoutines = await WeekRoutines.findByIdAndUpdate(req.body._id,{
        userId: req.body.userId,
        exerciseId: req.body.exerciseId,
        note: req.body.note,
        status: true
    })

    if(!weekRoutines) return res.status(401).send("Error updating")
    return res.status(200).send({weekRoutines});
    
})


// desactivar - URL: http://localhost:3001/api/weekRoutines/delete
router.put("/delete", Auth, UserAuth, async(req, res)=>{
    
    if(!req.body.userId || !req.body.exerciseId || !req.body.note) return res.status(401).send("Incomplete data");

    const weekRoutines = await WeekRoutines.findByIdAndUpdate(req.body._id,{
        userId: req.body.userId,
        exerciseId: req.body.exerciseId,
        note: req.body.note,
        status: false 
    })

    if(!weekRoutines) return res.status(401).send("Error deleting")
    return res.status(200).send({weekRoutines});
    
})



module.exports = router;