const { Router } = require("express");
const getAllChefs = require("./getController/getAllChefs.controller");
const createChef = require("./postController/createChef.controller");
const updateChef = require("./putController/updateProduct.controller");
const chefs = Router();

chefs.route("/").post(createChef);
chefs.route("/").get(getAllChefs);
chefs.route("/").put(updateChef);

module.exports = chefs;
