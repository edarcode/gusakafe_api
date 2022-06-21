const { Router } = require("express");
const createChef = require("./postController/createChef.controller");
const chefs = Router();

chefs.route("/").post(createChef);

module.exports = chefs;
