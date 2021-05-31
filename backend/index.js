const express = require("express");
const mongoose = require("mongoose");
const Auth = require("./routes/auth");
const User = require("./routes/user");
const NutritionPlan = require("./routes/nutritionPlans");

// Rutas
const DocumentType = require("./routes/documentType");
const WeekRoutines = require("./routes/weekRoutines");
const UserLocations = require("./routes/userLocations");

const app = express();

app.use(express.json());

app.use("/api/documentType/", DocumentType);
app.use("/api/weekRoutines/", WeekRoutines);
app.use("/api/userLocations/", UserLocations);
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
