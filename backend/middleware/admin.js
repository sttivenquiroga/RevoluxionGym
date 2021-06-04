
const Role = require("../models/rol");

const admin = async (req, res, next) => {
    
    const role = await Role.findById(req.user.rol);
    if (!role)
        return res.status(401).send("The role does not exist");
    
    if (role.rol === "admin") next();
    else return res.status(401).send("Unauthorized user");
};

module.exports = admin;
