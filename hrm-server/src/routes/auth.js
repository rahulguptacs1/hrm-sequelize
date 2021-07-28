var express = require("express");
var router = express.Router();
const authController = require("../controllers/auth");
router.get("/", authController.getAll);
router.get("/:id", authController.getOne);
router.patch("/:id", authController.update);
router.delete("/:id", authController.delete);
router.post("/register", authController.register);
module.exports = router;
