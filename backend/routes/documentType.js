const express = require("express");
const router = express.Router();
const DocumentType = require("../models/documentType");

const Auth = require("../middleware/auth");
const UserAuth = require("../middleware/user");
const Admin = require("../middleware/admin");


// añadir tipo de documento - URL: http://localhost:3001/api/documentType/add
router.post("/add", Auth, UserAuth, Admin, async(req, res)=>{    
    
    if(!req.body.documentType) return res.status(401).send("Incomplete data");

    const documentType = new DocumentType({
        documentType: req.body.documentType
    })

    const result = await documentType.save();
    if(!result) return res.status(401).send("Error creating")
    return res.status(200).send({result});
})


// ver Tipo de documentso - URL: http://localhost:3001/api/documentType/getAll
router.get("/getAll", Auth, UserAuth, Admin, async(req, res)=>{    
    
    const documentType = await DocumentType.find();
    if(!DocumentType) return res.status(401).send("Error fetching")
    return res.status(200).send({documentType})
})


//editar tipo documento - URL: http://localhost:3001/api/documentType/update
router.put("/update", Auth, UserAuth, Admin, async(req, res)=>{

    if(!req.body.documentType) return res.status(401).send("Incomplete data");

    const documentType = await DocumentType.findByIdAndUpdate(req.body._id, {
        documentType: req.body.documentType,
        status: true
    });
    if(!documentType) return res.status(401).send("Error updating")
    return res.status(200).send({documentType})
})


// desactivar - URL: http://localhost:3001/api/documentType/delete
router.put("/delete", Auth, UserAuth, Admin, async(req, res)=>{

    if(!req.body.documentType) return res.status(401).send("Incomplete data");

    const documentType = await DocumentType.findByIdAndUpdate(req.body._id, {
        documentType: req.body.documentType,
        status: false
    });
    if(!documentType) return res.status(401).send("Error deleting")
    return res.status(200).send({documentType})
})


module.exports = router;