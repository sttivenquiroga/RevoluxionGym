const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = require("../models/user");
const Rol = require("../models/rol");
const DocumentType = require("../models/documentType");
const Auth = require("../middleware/auth");
const UserAuth = require("../middleware/user");
const Admin = require("../middleware/admin");

router.post("/registerUser", async (req, res) => {
  if (
    !req.body.rol_id ||
    !req.body.documentType_id ||
    !req.body.numberDocument ||
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.email ||
    !req.body.password ||
    !req.body.phone
  )
    return res.status(401).send("Process failed: Incomplete Data");
  let user = await User.findOne({ user: req.body.user });
  if (user)
    return res.status(401).send("Process failed: Username is not avaible");
  user = await User.findOne({ email: req.body.email });
  if (user)
    return res.status(401).send("Process failed: Email is already registered");
  const hash = await bcrypt.hash(req.body.password, 10);
  const rol = await Rol.findOne({ rol: "user" });
  if (!rol) return res.status(401).send("Process failed: No role was assigned");
  let docType = mongoose.Types.ObjectId.isValid(req.body.documentType_id);
  if (!docType)
    return res.status(401).send("Process invalid: Invalid id document type");
  const data = new User({
    rolId: rol._id,
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
  try {
    const result = await data.save();
    if (!result) return res.status(401).send("Error creating new user");
    const jwtToken = data.generateJWT();
    res.status(200).send({ jwtToken });
  } catch (error) {
    if (!result) return res.status(401).send("Error creating new user");
  }
});

router.post("/registerAdmin", Auth, UserAuth, Admin, async (req, res) => {
  if (
    !req.body.rol_id ||
    !req.body.documentType_id ||
    !req.body.numberDocument ||
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.email ||
    !req.body.password ||
    !req.body.phone
  )
    return res.status(401).send("Process failed: Incomplete Data");
  let user = await User.findOne({ user: req.body.user });
  if (user)
    return res.status(401).send("Process failed: Username is not avaible");
  user = await User.findOne({ email: req.body.email });
  if (user)
    return res.status(401).send("Process failed: Email is already registered");
  const hash = await bcrypt.hash(req.body.password, 10);
  const rol = mongoose.Types.ObjectId.isValid(req.body.rol_id);
  if (!rol) return res.status(401).send("Process failed: Invalid id rol");
  let docType = mongoose.Types.ObjectId.isValid(req.body.documentType_id);
  if (!docType)
    return res.status(401).send("Process failed: Invalid id document type");
  const data = new User({
    rolId: req.body.rol_id,
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
  try {
    const result = await data.save();
    if (!result) return res.status(401).send("Error creating new user");
    const jwtToken = data.generateJWT();
    res.status(200).send({ jwtToken });
  } catch (error) {
    if (!result) return res.status(401).send("Error creating new user");
  }
});

router.get("/findUser/:name?", Auth, UserAuth, Admin, async (req, res) => {
  const user = await User.find({ name: new RegExp(req.params["name"], "i") })
    .populate("rolId")
    .populate("documentType_id")
    .exec();
  if (!user) return res.status(401).send("Error fetching user information");
  return res.status(200).send({ user });
});
router.put("/updateProfile", Auth, UserAuth, async (req, res) => {
  if (
    !req.body.documentType_id ||
    !req.body.numberDocument ||
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.email ||
    !req.body.password ||
    !req.body.phone ||
    !req.body.status
  )
    return res.status(401).send("Process failed: Incomplete data");
  let userVer = await User.findById(req.user._id);
  let verUser = await User.findOne({ user: req.body.user });
  if (verUser && verUser.user != req.body.user)
    return res.status(401).send("Process failed: Username is not avaible");
  verUser = await User.findOne({ email: req.body.email });
  if (verUser && verUser.email != req.body.email)
    return res.status(401).send("Process failed: Email is already registered");
  let hash = await bcrypt.compare(req.body.password, userVer.password);
  if (hash) {
    hash = userVer.password;
  } else {
    hash = await bcrypt.hash(req.body.password, 10);
  }
  if (!docType)
    return res.status(401).send("Process failed: Invalid id document type");
  user = await User.findByIdAndUpdate(req.user._id, {
    rol_id: req.user.rol_id,
    documentType_id: req.body.documentType_id,
    numberDocument: req.body.numberDocument,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    user: req.body.user,
    password: hash,
    phone: req.body.phone,
    status: req.body.status,
  });
  if (!user) return res.status(400).send("Error updating user information");
  return res.status(200).send({ user });
});

router.put("/updateUser", Auth, UserAuth, Admin, async (req, res) => {
  if (
    !req.body._id ||
    !req.body.rol_id ||
    !req.body.documentType_id ||
    !req.body.numberDocument ||
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.email ||
    !req.body.password ||
    !req.body.phone ||
    !req.body.status
  )
    return res.status(401).send("Process failed: Incomplete data");
  let user = await User.findById(req.body._id);
  let verUser = await User.findOne({ user: req.body.user });
  if (verUser && verUser.user != req.body.user)
    return res.status(401).send("Process failed: Username is not avaible");
  verUser = await User.findOne({ email: req.body.email });
  if (verUser && verUser.email != req.body.email)
    return res.status(401).send("Process failed: Email is already registered");
  let hash = await bcrypt.compare(req.body.password, user.password);
  if (hash) {
    hash = user.password;
  } else {
    hash = await bcrypt.hash(req.body.password, 10);
  }
  const rol = mongoose.Types.ObjectId.isValid(req.body.rol_id);
  if (!rol) return res.status(401).send("Process failed: Invalid id rol");
  let docType = mongoose.Types.ObjectId.isValid(req.body.documentType_id);
  if (!docType)
    return res.status(401).send("Process failed: Invalid id document type");
  user = await User.findByIdAndUpdate(req.body._id, {
    rol_id: req.body.rol_id,
    documentType_id: req.body.documentType_id,
    numberDocument: req.body.numberDocument,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    user: req.body.user,
    password: hash,
    phone: req.body.phone,
    status: req.body.status,
  });
  if (!user) return res.status(400).send("Error updating user information");
  return res.status(200).send({ user });
});

router.put("/deleteUser", Auth, UserAuth, Admin, async (req, res) => {
  if (
    !req.body._id ||
    !req.body.rol_id ||
    !req.body.documentType_id ||
    !req.body.numberDocument ||
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.email ||
    !req.body.password ||
    !req.body.phone
  )
    return res.status(401).send("Process failed: Incomplete data");
  let verUser = await User.findOne({ user: req.body.user });
  if (verUser && verUser.user != req.body.user)
    return res.status(401).send("Process failed: Username is not avaible");
  verUser = await User.findOne({ email: req.body.email });
  if (verUser && verUser.email != req.body.email)
    return res.status(401).send("Process failed: Email is already registered");
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
  if (!user) return res.status(400).send("Error deleting user");
  return res.status(200).send("User deleted successfully");
});
module.exports = router;
