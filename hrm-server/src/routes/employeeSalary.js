var express = require("express");
var router = express.Router();
const employeeSalaryController = require("../controllers/employeeSalary");
router.get("/", employeeSalaryController.getAll);

router.get("/:id", employeeSalaryController.getOne);
router.post("/", employeeSalaryController.create);
router.patch("/:id", employeeSalaryController.update);
router.delete("/:id", employeeSalaryController.delete);

module.exports = router;
