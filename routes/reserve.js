const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const reserveController = require("../app/controllers/reserveController");

router.get("/:reserve_id(\\d+)", reserveController.show);

module.exports = router;
