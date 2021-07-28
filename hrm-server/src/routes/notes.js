var express = require("express");
var router = express.Router();
const notesController = require("../controllers/notes");
router.get("/", notesController.getAll);
router.get("/search", notesController.search);
router.get("/searchor", notesController.searchor);
router.get("/searchlimit", notesController.searchlimit);
router.get("/:id", notesController.getOne);
// this should be after search
// otherwise they will be interpreted as id
router.post("/", notesController.create);
router.patch("/:id", notesController.update);
router.delete("/:id", notesController.delete);

module.exports = router;
