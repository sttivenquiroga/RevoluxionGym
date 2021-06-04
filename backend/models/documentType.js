const mongoose = require("mongoose");

// colecion tipo de documento
const documentTypeSchema = mongoose.Schema({
    documentType : String,
    status: {type:Boolean, default: true},
    date: {type:Date, default: Date.now},
})

const DocumentType = mongoose.model("documentType", documentTypeSchema);

module.exports = DocumentType;

