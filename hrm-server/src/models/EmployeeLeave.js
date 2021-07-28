const sequelize = require("../helpers/sequelize");
const { DataTypes } = require("sequelize");
module.exports = function () {
  const EmployeeLeave = sequelize.define("hrms_employee_leaves", {
    empId: {
      type: DataTypes.INTEGER,
      references: {
        model: "hrms_employee_details",
        key: "empId",
      },
    },
    leaveName: DataTypes.STRING(50),
    description: DataTypes.TEXT,
    startDate: { type: DataTypes.DATEONLY },
    endDate: { type: DataTypes.DATEONLY },
    totalDays: DataTypes.DOUBLE,
  });
  return EmployeeLeave;
};
