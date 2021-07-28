const { Department } = require("../models");
const createHttpError = require("http-errors");
const commonController = require("./common");
const departmentsController = {
  ...commonController(Department),
};
module.exports = departmentsController;
