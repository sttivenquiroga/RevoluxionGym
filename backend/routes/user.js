const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const Auth = require("../middleware/auth");

router.post("/registerUser", async (req, res) => {
  if (
    !req.body.numberDocument ||
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.email ||
    !req.body.password ||
    !req.body.phone
  )
    return res.status(401).send("Incomplet Data");

  let user = await User.findOne({ user: req.body.user });
  if (user) return res.status(401).send("Usuario ya registrado");
  user = await User.findOne({ email: req.body.email });
  if (user) return res.status(401).send("Correo ya registrado");
  const hass = await bcrypt.hash(req.body.password, 10);
  const data = new User({
    rol: "user",
    documentType_id: "CC",
    numberDocument: req.body.numberDocument,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    user: req.body.user,
    password: hass,
    phone: req.body.phone,
    status: true,
  });
  const result = await data.save();
  if (result) {
    const jwtToken = data.generateJWT();
    res.status(200).send({ jwtToken });
  } else {
    res.status(401).send("No se ha podido registrar el usuario");
  }
});

router.get("/findUser", Auth, async (req, res) => {
  validateUser(req, res);
  const user = await User.find();
  if (!user) return res.status(401).send("No fue posible realizar la consulta");
  return res.status(200).send({ user });
});

const validateUser = async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) return res.status(401).send("Usuario no existe");
};
module.exports = router;
