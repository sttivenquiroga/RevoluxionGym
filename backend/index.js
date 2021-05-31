const express = require("express");
const mongoose = require("mongoose");
const Auth = require("./routes/auth");
const User = require("./routes/user");
const NutritionPlan = require("./routes/nutritionPlans");

// Importamos rutas
// const Auth = require("./routes/auth");
const Departments = require("./routes/departments");
const Cities = require("./routes/cities");
const Locations = require("./routes/locations")

// Variable app la cual ejecutara nuestra aplicación
const app = express();

app.use(express.json());
// app.use("/api/auth/", Auth);
app.use("/api/departments/", Departments);
app.use("/api/cities/", Cities);
app.use("/api/locations/", Locations);
app.use("/api/auth/", Auth);
app.use("/api/user/", User);
app.use("/api/nutritionPlan/", NutritionPlan);

const port = process.env.PORT || 3001;

app.listen(port, () =>
  console.log("Servidor API habilitado en el port: " + port)
);

mongoose
  .connect("mongodb://localhost:27017/revoluxiongymdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("Conexion con MongoDB successful"))
  .catch((err) => console.log("Conexion con MongoDB no exitosa error: " + err));
