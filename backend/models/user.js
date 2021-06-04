const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const userSchema = new mongoose.Schema({
  rol_id: { type: mongoose.Schema.ObjectId, ref: "rol" },
  documentType_id: { type: mongoose.Schema.ObjectId, ref: "documentType" },
  numberDocument: String,
  firstName: String,
  lastName: String,
  email: String,
  user: String,
  password: String,
  phone: String,
  date: { type: Date, default: Date.now },
  status: { type: Boolean, default: true },
});

userSchema.methods.generateJWT = function () {
  return jwt.sign(
    {
      _id: this._id,
      name: this.name,
      rolId: this.rol_id,
      iat: moment().unix(),
    },
    process.env.SECRET_kEY_JWT
  );
};

const User = mongoose.model("users", userSchema);

module.exports = User;
