const myController = require("../controllers");
const routes = require("express").Router();

routes.get("/", myController.awesomeFunction);
routes.get("/ttech", myController.tooeleTechFunction);
// class routes
routes.use("/classes", require("./classes"));
//auth routes
routes.use("/auth", require("./auth"))

module.exports = routes; 