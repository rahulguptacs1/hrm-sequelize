require("dotenv").config();
const express = require("express");

const morgan = require("morgan");
const cors = require("cors");
const createHttpError = require("http-errors");
const { exec } = require("child_process");
exec(`kill -9 $(lsof -t -i:${process.env.PORT})`);
const redisClient = require("./helpers/initRedis");
const {
  Note,
  EmployeeDetail,
  Department,
  Position,
  EmployeeProject,
  EmployeeSalary,
  EmployeeTraining,
  EmployeeLeave,
} = require("./models");
const routes = require("./routes");
const sequelize = require("./helpers/sequelize");
const data = require("./data");
const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    message: "Hii, Root route working",
  });
});
app.use("/notes", routes.notesRouter);
app.use("/departments", routes.departmentsRouter);
app.use("/positions", routes.positionsRouter);
app.use("/employees/details", routes.employeeDetailsRouter);
app.use("/employees/projects", routes.employeeProjectsRouter);
app.use("/employees/salary", routes.employeeSalaryRouter);
app.use("/employees/trainings", routes.employeeTrainingsRouter);
app.use("/employees/leaves", routes.employeeLeavesRouter);
app.use("/auth", routes.authRouter);
// for unknown routes
app.use((req, res, next) => {
  next(createHttpError.NotFound());
});
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  const error = {
    status: err.status || 500,
    message: err.message,
  };
  console.log("Error: ", error);
  res.send({
    error,
  });
});
const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server running on port:", port);
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Database Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
sequelize
  .sync({ force: true })
  .then(async () => {
    console.log(`Creating Database and Tables`);

    Note.bulkCreate([
      { note: "pick up some bread after work", tag: "shopping" },
      { note: "remember to write up meeting notes", tag: "work" },
      { note: "learn how to use node orm", tag: "work" },
    ])
      .then(function () {
        return Note.findAll();
      })
      .then(function (notes) {
        //   console.log(notes);
      });
    await Department.bulkCreate(data.departments);
    const departments = await Department.findAll();
    // console.log(departments);
    await Position.bulkCreate(data.positions);
    const positions = await Position.findAll();
    // console.log(positions);
    await EmployeeDetail.bulkCreate(data.employeeDetails);
    const employeeDetails = await EmployeeDetail.findAll();
    // console.log(employeeDetails);
    for (let project of data.employeeProjects) {
      const createdProject = await EmployeeProject.create(project);
      for (let empId of project.empIdList) {
        await sequelize.models.EmployeeProjectMap.create({
          hrmsEmployeeProjectId: createdProject.dataValues.id,
          hrmsEmployeeDetailEmpId: empId,
        });
      }
    }
    const employeeProjects = await EmployeeProject.findAll();
    // console.log(employeeProjects)
    await EmployeeSalary.bulkCreate(data.employeeSalary);
    const employeeSalary = await EmployeeSalary.findAll();
    // console.log(employeeSalary);
    for (let training of data.employeeTrainings) {
      const createdTraining = await EmployeeTraining.create(training);
      for (let empId of training.empIdList) {
        await sequelize.models.EmployeeTrainingMap.create({
          hrmsEmployeeTrainingId: createdTraining.dataValues.id,
          hrmsEmployeeDetailEmpId: empId,
        });
      }
    }
    const employeeTrainings = await EmployeeTraining.findAll();
    // console.log(employeeTrainings)
    await EmployeeLeave.bulkCreate(data.employeeLeaves);
    const employeeLeaves = await EmployeeLeave.findAll();
    // console.log(employeeLeaves);
  })
  .then(() => {
    console.log("database and tables created");
  })
  .catch((err) => {
    console.log(err);
  });
