const { Router } = require("express");
const getAllChefs = require("./getController/getAllChefs.controller");
const createChef = require("./postController/createChef.controller");
const chefs = Router();

chefs.route("/").post(createChef);
chefs.route("/").get(getAllChefs);

module.exports = chefs;
