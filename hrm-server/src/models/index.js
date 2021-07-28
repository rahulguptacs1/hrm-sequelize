const Note = require("./Note")();
const EmployeeDetail = require("./EmployeeDetail")();
EmployeeDetail.hasMany(EmployeeDetail, {
  foreignKey: "supervisorId",
  onDelete: "SET NULL",
});
const Department = require("./Department")();
Department.hasMany(EmployeeDetail, {
  foreignKey: "deptId",
  onDelete: "SET NULL",
});

const Position = require("./Position")();
Position.hasMany(EmployeeDetail, {
  foreignKey: "positionId",
  onDelete: "SET NULL",
});
const EmployeeProject = require("./EmployeeProject")();
EmployeeProject.belongsToMany(EmployeeDetail, {
  through: "EmployeeProjectMap",
  onDelete: "CASCADE",
});

const EmployeeSalary = require("./EmployeeSalary")();
EmployeeDetail.hasOne(EmployeeSalary, {
  foreignKey: "empId",
  onDelete: "CASCADE",
});
const EmployeeTraining = require("./EmployeeTraining")();
EmployeeTraining.belongsToMany(EmployeeDetail, {
  through: "EmployeeTrainingMap",
  onDelete: "CASCADE",
});
const EmployeeLeave = require("./EmployeeLeave")();
EmployeeDetail.hasMany(EmployeeLeave, {
  foreignKey: "empId",
  onDelete: "CASCADE",
});
const Login = require("./Login")();
EmployeeDetail.hasOne(Login, {
  foreignKey: "empId",
  onDelete: "CASCADE",
});
module.exports = {
  Note,
  EmployeeDetail,
  Department,
  Position,
  EmployeeProject,
  EmployeeSalary,
  EmployeeTraining,
  EmployeeLeave,
  Login,
};
