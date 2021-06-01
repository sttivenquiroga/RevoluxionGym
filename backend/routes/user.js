const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const Auth = require("../middleware/auth");
const { validate } = require("../models/user");

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
  const hash = await bcrypt.hash(req.body.password, 10);
  const data = new User({
    rol: "user",
    documentType_id: "CC",
    numberDocument: req.body.numberDocument,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    user: req.body.user,
    password: hash,
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
  await validateUser(req, res);
  const user = await User.find();
  if (!user) return res.status(401).send("No fue posible realizar la consulta");
  return res.status(200).send({ user });
});

router.put("/updateUser", Auth, async (req, res) => {
  await validateUser(req, res);
  if (
    !req.body.numberDocument ||
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.email ||
    !req.body.password ||
    !req.body.phone
  )
    return res.status(401).send("Incomplet data");
  let verUser = await User.findOne({ user: req.body.user });
  if (verUser && verUser.user != req.body.user)
    return res.status(401).send("Nombre de usuario no disponible");
  verUser = await User.findOne({ email: req.body.email });
  if (verUser && verUser.email != req.body.email)
    return res.status(401).send("Correo electronico ya registrado");
  let hash = await bcrypt.compare(req.body.password, verUser.password);
  if (hash) {
    hash = verUser.password;
  } else {
    hash = await bcrypt.hash(req.body.password, 10);
  }
  const user = await User.findByIdAndUpdate(req.body._id, {
    rol: "user",
    documentType_id: "CC",
    numberDocument: req.body.numberDocument,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    user: req.body.user,
    password: hash,
    phone: req.body.phone,
    status: true,
  });
  if (!user)
    return res
      .status(400)
      .send("No fue posible actualizar la información de usuario");
  return res.status(200).send({ user });
});

const validateUser = async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) return res.status(401).send("Usuario no existe");
};
module.exports = router;
