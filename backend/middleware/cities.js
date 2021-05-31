function validateCity(req, res, next) {
    const {department_id, city} = req.body;
    if(!department_id) { 
        return res.status(400).send("No se envió el id del departamento");
    }
    if(!city) { 
        return res.status(400).send("No se envió el nombre de la ciudad");
    }
    next();
}

module.exports = validateCity;