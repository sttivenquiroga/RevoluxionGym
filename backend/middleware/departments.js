function validateDepartment(req, res, next) {
    const {department} = req.body;
    if(!department) { 
        return res.status(400).send("No se envió el nombre del departamento");
    }
    next();
}

module.exports = validateDepartment;