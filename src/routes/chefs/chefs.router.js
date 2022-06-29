const { Router } = require("express");
const { adminValidate } = require("../../middlewares/adminValidate");
const { tokenValidate } = require("../../middlewares/tokenValidate");
const getAllChefs = require("./getController/getAllChefs.controller");
const createChefController = require("./postController/createChef.controller");
const createSuperChefController = require("./postController/createSuperChef.controller");
const updateChef = require("./putController/updateProduct.controller");
const chefs = Router();

const middlewares = [tokenValidate, adminValidate];

chefs.route("/super").post(createSuperChefController);
chefs.route("/").post(middlewares, createChefController);
chefs.route("/").get(getAllChefs);
chefs.route("/").put(updateChef);

module.exports = chefs;
