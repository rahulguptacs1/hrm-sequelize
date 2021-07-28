const sequelize = require("../helpers/sequelize");
const { DataTypes } = require("sequelize");
module.exports = function () {
  const EmployeeProject = sequelize.define("hrms_employee_projects", {
    projectHandled: { type: DataTypes.STRING(100) },

    dateStarted: { type: DataTypes.DATEONLY },
    dateEnded: { type: DataTypes.DATEONLY },
    status: { type: DataTypes.STRING(10) },
  });
  return EmployeeProject;
};
