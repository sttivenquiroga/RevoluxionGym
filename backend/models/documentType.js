const mongoose = require("mongoose");

// colecion tipo de documento
const documentTypeSchema = mongoose.Schema({
    documentType : String,
    status: {type:Boolean, default: true}
})

const DocumentType = mongoose.model("documentType", documentTypeSchema);

module.exports = DocumentType;

