const sequelize = require("../helpers/sequelize");
const { DataTypes } = require("sequelize");
module.exports = function () {
  const EmployeeSalary = sequelize.define("hrms_employee_salary", {
    empId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: "hrms_employee_details",
        key: "empId",
      },
    },
    salaryRange: { type: DataTypes.STRING(45) },
    annualIncome: DataTypes.DOUBLE,
    taxable: DataTypes.DOUBLE,
    loans: DataTypes.DOUBLE,
    insurance: DataTypes.DOUBLE,
  });
  return EmployeeSalary;
};
