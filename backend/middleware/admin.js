const Rol = require("../models/rol");

const admin = async (req, res, next) => {
  const rol = await Rol.findById(req.user.rolId);
  if (!rol) return res.status(401).send("Process failed: Role does not exists");
  if (rol.rol === "admin") next();
  else return res.status(401).send("Process failed: Unauthorized user");
};

module.exports = admin;
