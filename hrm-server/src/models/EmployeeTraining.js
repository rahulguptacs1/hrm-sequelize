const sequelize = require("../helpers/sequelize");
const { DataTypes } = require("sequelize");
module.exports = function () {
  const EmployeeTraining = sequelize.define("hrms_employee_trainings", {
    skills: DataTypes.TEXT,
    training: { type: DataTypes.STRING(45) },
    projectReqt: { type: DataTypes.STRING(45) },
    bond: DataTypes.DOUBLE,
  });
  return EmployeeTraining;
};
