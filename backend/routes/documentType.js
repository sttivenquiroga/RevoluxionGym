const express = require("express");
const router = express.Router();
const DocumentType = require("../models/documentType");

const User = require("../models/user");
const Auth = require("../middleware/auth");


// añadir tipo de documento - URL: http://localhost:3001/api/documentType/addDocumentType
router.post("/addDocumentType", Auth, async(req, res)=>{

    const user = await User.findById(req.user._id)
    if(!user) return res.status(401).send("Usuario no autenticado");

    if(Object.keys(req.body).length === 0) return res.status(401).send("No vienen campos");
    if(!req.body.documentType) return res.status(401).send("Faltan campos");

    const documentType = new DocumentType({
        documentType: req.body.documentType
    })

    const result = await documentType.save();
    if(!result) return res.status(401).send("No se pudo añadir el documento")
    return res.status(200).send({result});

})


// ver Tipo de documentso - URL: http://localhost:3001/api/documentType/viewDocumentType
router.get("/viewDocumentType", Auth, async(req, res)=>{

    const user = await User.findById(req.user._id)
    if(!user) return res.status(401).send("Usuario no autenticado");
    
    const documentType = await DocumentType.find();
    if(!DocumentType) return res.status(401).send("No se encontraron resultados")
    return res.status(200).send({documentType})
})


//editar tipo documento - URL: http://localhost:3001/api/documentType/updateDocumenType
router.put("/updateDocumentType", Auth, async(req, res)=>{

    const user = await User.findById(req.user._id)
    if(!user) return res.status(401).send("Usuario no autenticado");

    if(Object.keys(req.body).length === 0) return res.status(401).send("No vienen campos");
    if(!req.body.documentType || !req.body.status) return res.status(401).send("Faltan campos");

    const documentType = await DocumentType.findByIdAndUpdate(req.body._id, {
        documentType: req.body.documentType,
        status: req.body.status
    });
    if(!documentType) return res.status(401).send("No se pudo editar el documento")
    return res.status(200).send({documentType})
})


//eliminar tipo documento - URL: http://localhost:3001/api/documentType/deleteDocumenType
router.delete("/:_id", Auth, async(req, res)=>{

    const user = await User.findById(req.user._id)
    if(!user) return res.status(401).send("Usuario no autenticado");

    const documentType = await DocumentType.findByIdAndRemove(req.params._id)
    if(!documentType) return res.status(401).send("No se pudo eliminar el documento")
    return res.status(200).send("Eliminado correctamente")
})


module.exports = router;