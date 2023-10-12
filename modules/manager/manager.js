"use strict";
let registerData = require("../model/registerData");
let EmployeesModel = require("../model/userData");

let addEmployees = async (user, req) => {
  let getUserTableData = await EmployeesModel.findOne({ Emp_ID: req.body.Id });

  if (getUserTableData) {
    let findData = {
      Emp_ID: getUserTableData.Emp_ID,
      Name: getUserTableData.Name,
    };
    let addUserData = await registerData.create(findData);
    console.log(addUserData);
  }

  return { data: getUserTableData };
};

module.exports = {
  addEmployees,
};
