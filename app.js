const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const logger = require("./Middleware/logger");
const PORT = process.env.PORT || 3001;
//this is the MAIN ROUTER for API/STUDENTS
app.use("/api/students", require("./routes/api/students"));
app.use(logger);
// 3 middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// listing at port 3001
app.listen(PORT, () =>
  console.log(`listening on port: http://localhost:${PORT}`)
);
