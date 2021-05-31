const express = require("express");
const mongoose = require("mongoose");

// Importamos rutas
const Auth = require("./routes/auth");
const User = require("./routes/user");
const NutritionPlan = require("./routes/nutritionPlans");
const Departments = require("./routes/departments");
const Cities = require("./routes/cities");
const Locations = require("./routes/locations")
const Exercise = require("./routes/exercise");
const TypeExercise = require("./routes/typeExercise");
const TypeMuscle = require("./routes/typeMuscle");
const Plan = require("./routes/plan");
const Rol = require("./routes/rol");
const StatusPayment = require("./routes/statusPayment");

// Variable app la cual ejecutara nuestra aplicación
const app = express();

app.use(express.json());
app.use("/api/auth/", Auth);
app.use("/api/departments/", Departments);
app.use("/api/cities/", Cities);
app.use("/api/locations/", Locations);
app.use("/api/auth/", Auth);
app.use("/api/user/", User);
app.use("/api/nutritionPlan/", NutritionPlan);
app.use("/api/exercise/", Exercise);
app.use("/api/typeMuscle/", TypeMuscle);
app.use("/api/typeExercise/", TypeExercise);
app.use("/api/nutritionPlan/", NutritionPlan);
app.use("/api/plan/", Plan);
app.use("/api/rol/", Rol);
app.use("/api/statusPayment/", StatusPayment);

// Tipos de puerto que tiene nuestra aplicacion ( Left: Hosting and Right: Local )
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
