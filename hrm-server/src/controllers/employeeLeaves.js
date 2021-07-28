const { EmployeeLeave } = require("../models");
const commonController = require("./common");
const createHttpError = require("http-errors");
const employeeLeavesController = {
  ...commonController(EmployeeLeave),
};
module.exports = employeeLeavesController;
