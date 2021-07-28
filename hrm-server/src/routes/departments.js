var express = require("express");
var router = express.Router();
const departmentsController = require("../controllers/departments");
router.get("/", departmentsController.getAll);
router.get("/:id", departmentsController.getOne);
router.post("/", departmentsController.create);
router.patch("/:id", departmentsController.update);
router.delete("/:id", departmentsController.delete);

module.exports = router;
