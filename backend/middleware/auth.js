// Modulo jwt
const jwt = require("jsonwebtoken");

// Validación de autenticación
const auth = (req, res, next) => {
    // Verificamos el header en su parte de autorización
    let jwtToken = req.header("Authorization");
    // Validamos si existe el jwt
    if (!jwtToken) return res.status(400).send("Autorización rechazada: no hay un token");
    // Si existe el jwt vamos a separar el payload
    jwtToken = jwtToken.split(" ")[1];
    if (!jwtToken) return res.status(400).send("Autorización rechazada: no hay un token");
    // Validamos que sea un token nuestro
    try {
        // Revisamos palabra secreta del payload
        const payload = jwt.verify(jwtToken, "CssRG28052021");
        req.user = payload;
        next();
    } catch (error) {
        // Mensaje de error
        return res.status(400).send("Autorización rechazada: token no valido");
    }
};

// Exportamos el modulo
module.exports = auth;