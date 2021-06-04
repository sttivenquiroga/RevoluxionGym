const mongoose = require("mongoose");

const departmentsSchema = new mongoose.Schema({
    id: String,
    department: String,
    status: {type:Boolean, default: true},
    date: {type: Date, default: Date.now}

})
const Departments = mongoose.model("departments", departmentsSchema);

module.exports = Departments;