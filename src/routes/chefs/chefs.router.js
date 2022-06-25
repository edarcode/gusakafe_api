const { Router } = require("express");
const { adminValidate } = require("../../middlewares/adminValidate");
const { tokenValidate } = require("../../middlewares/tokenValidate");
const getAllChefs = require("./getController/getAllChefs.controller");
const createChef = require("./postController/createChef.controller");
const createSuper = require("./postController/createSuper.controller");
const updateChef = require("./putController/updateProduct.controller");
const chefs = Router();

const middlewares = [tokenValidate, adminValidate];

chefs.route("/super").post(createSuper);
chefs.route("/").post(middlewares, createChef);
chefs.route("/").get(getAllChefs);
chefs.route("/").put(updateChef);

module.exports = chefs;
