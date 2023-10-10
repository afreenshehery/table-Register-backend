const express = require("express");
const bodyparser = require("body-parser");
// const responseHandler = require('./modules/middleware/responseHandler');
// const cronjobs = require('./modules/cronjobs/cronjob_settings');
const app = express();
const cors = require("cors");
const path = require("path");

app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

// app.use(express.static(path.join(__dirname, "dist")));

const port = process.env.PORT || 3000;
let server = app.listen(port, () => {
  console.log("App is listing at port  :" + port);
});

app.use(bodyparser.json());

require("./routes")(app);
app.use("/", (req, res) => {});
