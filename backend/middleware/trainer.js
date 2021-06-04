
const Role = require("../models/rol");

const trainer = async (req, res, next)=>{
    
    const trainerRol = await Role.findById(req.user.rol)
    if(!trainerRol) return res.status(401).send("The role doesn't exist");    
    
    if(trainerRol.rol == "trainer") next();
    else return res.status(401).send("Unauthorized user");
}


module.exports = trainer;


