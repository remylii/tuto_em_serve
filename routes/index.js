const express = require("express");
const router = express.Router();
const index_controller = require("../app/controllers/indexController");

/* GET home page. */
router.get("/", index_controller.index_list);

module.exports = router;
