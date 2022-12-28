const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const emailRoutes = require("./routes/email.router");

//Initialization
const app = express();

//Settings
app.set("port", process.env.PORT || 4000);

//Miiddlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use("/app/v1/email", emailRoutes);

module.exports = app;
