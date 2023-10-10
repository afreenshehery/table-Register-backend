"use strict";

let config = process.config.global_config;
let express = require("express");

module.exports = (app) => {
  app.use("/uploads", express.static(__dirname + "/uploads"));

  app.use("/api/employee", require("./modules/router/router"));
};
