const sequelize = require("../helpers/sequelize");
const { DataTypes } = require("sequelize");
module.exports = function () {
  const Department = sequelize.define("departments", {
    deptId: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    departmentName: DataTypes.STRING(45),
  });
  return Department;
};
