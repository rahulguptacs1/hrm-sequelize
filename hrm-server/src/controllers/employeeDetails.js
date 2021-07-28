const { EmployeeDetail } = require("../models");
const commonController = require("./common");
const createHttpError = require("http-errors");
const employeeDetailsController = {
  ...commonController(EmployeeDetail),
};
module.exports = employeeDetailsController;
