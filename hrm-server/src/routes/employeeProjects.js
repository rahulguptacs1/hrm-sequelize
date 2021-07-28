var express = require("express");
var router = express.Router();
const employeeProjectsController = require("../controllers/employeeProjects");
router.get("/map", employeeProjectsController.getEmployeeProjectMap);
router.get("/", employeeProjectsController.getAll);

router.get("/:id", employeeProjectsController.getOne);
router.post("/", employeeProjectsController.create);
router.patch("/:id", employeeProjectsController.update);
router.delete("/:id", employeeProjectsController.delete);

module.exports = router;
