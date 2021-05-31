// Importamos los modulos expess y mongoose
const express = require("express");
const mongoose = require("mongoose");

// Importamos rutas
// const Auth = require("./routes/auth");
const Departments = require("./routes/departments");
const Cities = require("./routes/cities");
const Locations = require("./routes/locations")

// Variable app la cual ejecutara nuestra aplicación
const app = express();

// En la aplicación api usaremos jsons para la comunicación
app.use(express.json());
// app.use("/api/auth/", Auth);
app.use("/api/departments/", Departments);
app.use("/api/cities/", Cities);
app.use("/api/locations/", Locations);

// Tipos de puerto que tiene nuestra aplicacion ( Left: Hosting and Right: Local )
const port = process.env.PORT || 3001;

// Evento el cual nos informa el estado del servidor 
app.listen(port, () => console.log("Servidor API habilitado en el port: " + port));

// Conexion directa a MongoDB (NoSQL) usando la promesa connect que pertenece a la libreria mongoose
mongoose.connect("mongodb://localhost:27017/revoluxiongymdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false, 
    useCreateIndex: true
})
.then(() => console.log("Conexion con MongoDB successful"))
.catch((err) => console.log("Conexion con MongoDB no exitosa error: " + err));