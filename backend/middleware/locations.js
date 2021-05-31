function validateLocation(req, res, next) {
    const {city_id, location, address, phone, manager_id} = req.body;
    if(!city_id) { 
        return res.status(400).send("No se envió el id de la ciudad");
    }
    if(!location) { 
        return res.status(400).send("No se envió el nombre de la sede");
    }
    if(!address) { 
        return res.status(400).send("No se envió la dirección de la sede");
    }
    if(!phone) { 
        return res.status(400).send("No se envió el teléfono de la sede");
    }
    if(!manager_id) { 
        return res.status(400).send("No se envió el id de la administrador de la sede");
    }
    next();
}

module.exports = validateLocation;