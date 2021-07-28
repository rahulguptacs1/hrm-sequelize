var express = require("express");
var router = express.Router();
const positionsController = require("../controllers/positions");
router.get("/", positionsController.getAll);
router.get("/:id", positionsController.getOne);
router.post("/", positionsController.create);
router.patch("/:id", positionsController.update);
router.delete("/:id", positionsController.delete);

module.exports = router;
