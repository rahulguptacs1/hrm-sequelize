var express = require("express");
var router = express.Router();
const employeeDetailsController = require("../controllers/employeeDetails");
router.get("/", employeeDetailsController.getAll);
router.get("/:id", employeeDetailsController.getOne);
router.post("/", employeeDetailsController.create);
router.patch("/:id", employeeDetailsController.update);
router.delete("/:id", employeeDetailsController.delete);

module.exports = router;
