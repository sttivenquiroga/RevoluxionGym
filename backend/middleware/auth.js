const jwt = require("jsonwebtoken");


const auth = (req, res, next) => {

    let jwtToken = req.header("Authorization");    
    if (!jwtToken) return res.status(400).send("Autorización rechazada: no hay un token");    
    jwtToken = jwtToken.split(" ")[1];
    if (!jwtToken) return res.status(400).send("Autorización rechazada: no hay un token");    
    try {        
        const payload = jwt.verify(jwtToken, "CssRG28052021");
        req.user = payload;
        next();
    } catch (error) {        
        return res.status(400).send("Autorización rechazada: token no valido");
    }
};

module.exports = auth;