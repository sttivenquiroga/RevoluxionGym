const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
require("dotenv").config();

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
const DocumentType = require("./routes/documentType");
const WeekRoutines = require("./routes/weekRoutines");
const UserLocations = require("./routes/userLocations");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/documentType/", DocumentType);
app.use("/api/weekRoutines/", WeekRoutines);
app.use("/api/userLocations/", UserLocations);
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

app.listen(process.env.PORT, () =>
  console.log("Backend server running on port: " + process.env.PORT)
);

dbConnection();
