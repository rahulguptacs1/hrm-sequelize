const sequelize = require("../helpers/sequelize");
const { DataTypes } = require("sequelize");
module.exports = function () {
  const Login = sequelize.define("hrms_login", {
    empId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: "hrms_employee_details",
        key: "empId",
      },
    },
    username: { type: DataTypes.STRING(50), unique: true },
    password: DataTypes.STRING(45),
    role: DataTypes.STRING(10),
  });
  return Login;
};
