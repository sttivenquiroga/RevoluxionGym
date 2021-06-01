const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/user");
const Auth = require("../middleware/auth");
const UserAuth = require("../middleware/user");

router.post("/registerUser", async (req, res) => {
  if (
    !req.body.numberDocument ||
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.email ||
    !req.body.password ||
    !req.body.phone
  )
    return res.status(401).send("Incomplete Data");
  let user = await User.findOne({ user: req.body.user });
  if (user) return res.status(401).send("User is registered");
  user = await User.findOne({ email: req.body.email });
  if (user) return res.status(401).send("Email is registered");
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
    res.status(401).send("Error creating new user");
  }
});

router.get("/findUser", Auth, UserAuth, async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) return res.status(401).send("Error fetching user information");
  return res.status(200).send({ user });
});

router.put("/updateUser", Auth, UserAuth, async (req, res) => {
  if (
    !req.body.rol ||
    !req.body.documentType_id ||
    !req.body.numberDocument ||
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.email ||
    !req.body.password ||
    !req.body.phone
  )
    return res.status(401).send("Incomplete data");
  let verUser = await User.findOne({ user: req.body.user });
  if (verUser && verUser.user != req.body.user)
    return res.status(401).send("Username is not avaible");
  verUser = await User.findOne({ email: req.body.email });
  if (verUser && verUser.email != req.body.email)
    return res.status(401).send("Email is registered");
  let hash = await bcrypt.compare(req.body.password, verUser.password);
  if (hash) {
    hash = verUser.password;
  } else {
    hash = await bcrypt.hash(req.body.password, 10);
  }
  const user = await User.findByIdAndUpdate(req.body._id, {
    rol: req.body.rol,
    documentType_id: req.body.documentType_id,
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
      .send("Error updating user information");
  return res.status(200).send({ user });
});

router.put("/deleteUser", Auth, UserAuth, async (req, res) => {
  if (
    !req.body.rol ||
    !req.body.documentType_id ||
    !req.body.numberDocument ||
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.email ||
    !req.body.password ||
    !req.body.phone
  )
    return res.status(401).send("Incomplete data");
  let verUser = await User.findOne({ user: req.body.user });
  if (verUser && verUser.user != req.body.user)
    return res.status(401).send("Username is not avaible");
  verUser = await User.findOne({ email: req.body.email });
  if (verUser && verUser.email != req.body.email)
    return res.status(401).send("Email is registered");
  let hash = await bcrypt.compare(req.body.password, verUser.password);
  if (hash) {
    hash = verUser.password;
  } else {
    hash = await bcrypt.hash(req.body.password, 10);
  }
  const user = await User.findByIdAndUpdate(req.body._id, {
    rol: req.body.rol,
    documentType_id: req.body.documentType_id,
    numberDocument: req.body.numberDocument,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    user: req.body.user,
    password: hash,
    phone: req.body.phone,
    status: false,
  });
  if (!user)
    return res
      .status(400)
      .send("Error deleting user");
  return res.status(200).send("User deleted successfully");
});
module.exports = router;
