const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");
var bodyParser = require("body-parser");
require("dotenv/config");
const app = express();

app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.json());

const lighthouseRoute = require("./routes/lightRoute");
const project_routes = require("./routes/project.js");
const link_routes = require("./routes/link.js");

app.use("/lighthouse", lighthouseRoute);
app.use("/projects", project_routes);
app.use("/links", link_routes);

//connect to db
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("Database Connected");
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});
