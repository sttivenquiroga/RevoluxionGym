const mongoose = require("mongoose");

const departmentsSchema = new mongoose.Schema({
    id: String,
    department: String,
    status: {type:Boolean, default: true}
})
const Departments = mongoose.model("departments", departmentsSchema);

module.exports = Departments;