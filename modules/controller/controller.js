"use strict";
let employeeManager = require("../manager/manager");

let addEmployees = (req, res, next) => {
  let user = req.user;
  employeeManager
    .addEmployees(user, req)
    .then((data) => {
      return res.json({
        status: 200,
        data: data,
      });
    })
    .catch(next);
};

module.exports = {
  addEmployees,
};
