var express = require("express");
var router = express.Router();
const employeeLeavesController = require("../controllers/employeeLeaves");
router.get("/", employeeLeavesController.getAll);

router.get("/:id", employeeLeavesController.getOne);
router.post("/", employeeLeavesController.create);
router.patch("/:id", employeeLeavesController.update);
router.delete("/:id", employeeLeavesController.delete);

module.exports = router;
