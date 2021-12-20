const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const logger = require("./Middleware/logger");
const PORT = process.env.PORT || 4001;
//this is the MAIN ROUTER for API/STUDENTS
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/students", require("./routes/api/students"));
app.use(logger);
// 3 middleware
app.use(express.static("public"));

// listing at port 3001
app.listen(PORT, () =>
  console.log(`listening on port: http://localhost:${PORT}`)
);
