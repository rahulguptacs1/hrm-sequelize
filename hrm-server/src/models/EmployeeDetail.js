const sequelize = require("../helpers/sequelize");
const { DataTypes } = require("sequelize");
module.exports = function () {
  const EmployeeDetail = sequelize.define("hrms_employee_details", {
    empId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: { type: DataTypes.STRING(50) },
    lastName: { type: DataTypes.STRING(50) },
    midName: { type: DataTypes.STRING(50) },
    positionId: {
      type: DataTypes.INTEGER,
      references: {
        model: "positions",
        key: "positionId",
      },
    },
    deptId: {
      type: DataTypes.INTEGER,
      references: {
        model: "departments",
        key: "deptId",
      },
    },
    birthDate: { type: DataTypes.DATEONLY },
    age: { type: DataTypes.INTEGER },
    sex: { type: DataTypes.STRING(1) },
    address: { type: DataTypes.STRING(100) },
    employedDate: { type: DataTypes.DATEONLY },
    supervisorId: {
      type: DataTypes.INTEGER,
      references: {
        model: "hrms_employee_details",
        key: "empId",
      },
    },
  });
  return EmployeeDetail;
};
