const notesRouter = require("./notes");
const employeeDetailsRouter = require("./employeeDetails");
const departmentsRouter = require("./departments");
const positionsRouter = require("./positions");
const employeeProjectsRouter = require("./employeeProjects");
const employeeSalaryRouter = require("./employeeSalary");
const employeeTrainingsRouter = require("./employeeTrainings");
const employeeLeavesRouter = require("./employeeLeaves");
const authRouter = require("./auth");
module.exports = {
  notesRouter,
  employeeDetailsRouter,
  departmentsRouter,
  positionsRouter,
  employeeProjectsRouter,
  employeeSalaryRouter,
  employeeTrainingsRouter,
  employeeLeavesRouter,
  authRouter,
};
