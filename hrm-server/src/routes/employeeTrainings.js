var express = require("express");
var router = express.Router();
const employeeTrainingsController = require("../controllers/employeeTrainings");
router.get("/map", employeeTrainingsController.getEmployeeTrainingMap);
router.get("/", employeeTrainingsController.getAll);

router.get("/:id", employeeTrainingsController.getOne);
router.post("/", employeeTrainingsController.create);
router.patch("/:id", employeeTrainingsController.update);
router.delete("/:id", employeeTrainingsController.delete);

module.exports = router;
