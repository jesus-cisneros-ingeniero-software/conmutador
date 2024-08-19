const express = require("express");
const router = express.Router();
const registroController = require("../controllers/registroController");

router.get("/", registroController.list);
router.get("/new", registroController.newForm);
router.post("/new", registroController.create);

module.exports = router;
