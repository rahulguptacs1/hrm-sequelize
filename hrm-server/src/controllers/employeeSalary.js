const { EmployeeSalary } = require("../models");
const commonController = require("./common");
const createHttpError = require("http-errors");
const employeeSalaryController = {
  ...commonController(EmployeeSalary),
};
module.exports = employeeSalaryController;
