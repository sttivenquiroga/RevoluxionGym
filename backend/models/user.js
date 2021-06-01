const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const userSchema = new mongoose.Schema({
    rol: String,
    documentType_id: String,
    numberDocument: String,
    firstName: String,
    lastName: String,
    email: String,
    user: String,
    password: String,
    phone: String,
    date: {type: Date, default: Date.now},
    status: Boolean,
});

userSchema.methods.generateJWT = function(){
    return jwt.sign({
        _id: this._id,
        name: this.name,
        iat: moment().unix()
    }, 
    process.env.SECRET_kEY_JWT
    );
};

const User = mongoose.model("users", userSchema);

module.exports = User;