const { Router } = require("express");
const getAllChefs = require("./getController/getAllChefs.controller");
const createChef = require("./postController/createChef.controller");
const createSuper = require("./postController/createSuper.controller");
const updateChef = require("./putController/updateProduct.controller");
const chefs = Router();

chefs.route("/super").post(createSuper);
chefs.route("/").post(createChef);
chefs.route("/").get(getAllChefs);
chefs.route("/").put(updateChef);

module.exports = chefs;
