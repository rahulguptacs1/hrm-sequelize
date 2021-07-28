const sequelize = require("../helpers/sequelize");
const { EmployeeTraining } = require("../models");
const createHttpError = require("http-errors");
const commonController = require("./common");
const employeeProjectsController = {
  ...commonController(EmployeeTraining),
  create: async (req, res, next) => {
    try {
      const project = await EmployeeTraining.create(req.body);
      // create associations
      //   console.log(project.dataValues.id);
      req.body.empIdList?.forEach(async (empId) => {
        await sequelize.models.EmployeeTrainingMap.create({
          hrmsEmployeeTrainingId: project.dataValues.id,
          hrmsEmployeeDetailEmpId: empId,
        });
      });

      res.json({
        message: "created successfully",
        entry: project,
      });
    } catch (err) {
      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const project = await EmployeeTraining.findByPk(req.params.id);

      if (project) {
        const updatedProject = await project.update(req.body);
        if (req.body.empIdList) {
          // if the list is provided then delete previous associations
          await sequelize.models.EmployeeTrainingMap.destroy({
            where: {
              hrmsEmployeeTrainingId: req.params.id,
            },
          });
          // add new associations
          req.body.empIdList.forEach(async (empId) => {
            await sequelize.models.EmployeeTrainingMap.create({
              hrmsEmployeeTrainingId: req.params.id,
              hrmsEmployeeDetailEmpId: empId,
            });
          });
        }

        res.json({
          message: "updated successfully",
          entry: updatedProject,
        });
      } else {
        throw createHttpError.NotFound("no entry with id: " + req.params.id);
      }
    } catch (err) {
      next(err);
    }
  },

  getEmployeeTrainingMap: async (req, res, next) => {
    sequelize.models.EmployeeTrainingMap.findAll()
      .then((entries) => {
        res.json({
          message: "fetched successfully",
          entries,
        });
      })
      .catch((err) => {
        next(err);
      });
  },
};
module.exports = employeeProjectsController;
