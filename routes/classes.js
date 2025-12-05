const express = require("express");
const router = express.Router();

const ClassesController = require("../controllers/index");

router.get("/", ClassesController.getAllClasses);

router.get("/:id", ClassesController.getSingleClass);

router.post("/", ClassesController.createClass);

module.exports = router; 