"use strict";

let EmployeesModel = require("../model/userData");

let addEmployees = async (user, req) => {
  let getUserTableData = await EmployeesModel.findOne({ Emp_ID: req.body.Id });
  console.log(req.body, getUserTableData);

  return { data: getUserTableData };
};

module.exports = {
  addEmployees,
};
