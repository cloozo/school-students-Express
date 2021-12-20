const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const logger = require("./Middleware/logger");
const students = require("./db/Students");

const PORT = process.env.PORT || 5000;
//handbar  Middleware
app.engine("handlebars", exphbs.engine);
// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//logger
app.use(logger);
//this is the MAIN ROUTER for API/STUDENTS
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
//Homepage Route
app.get("/", (req, res) =>
  res.render("index", {
    title: "Student App",
    students,
  })
);
// Static homepage
app.use(express.static("public"));
/* app.use(express.static(path.join(__dirname, "public"))); */
// get All members
app.use("/api/students", require("./routes/api/students"));
// listing at port 3001
app.listen(PORT, () =>
  console.log(`listening on port: http://localhost:${PORT}`)
);
