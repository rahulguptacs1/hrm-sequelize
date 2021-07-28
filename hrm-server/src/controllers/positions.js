const { Position } = require("../models");
const commonController = require("./common");
const createHttpError = require("http-errors");
const positionsController = {
  ...commonController(Position),
};
module.exports = positionsController;
