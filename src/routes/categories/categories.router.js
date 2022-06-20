const { Router } = require("express");
const getAllCategory = require("./getController/getAllCategories.controller");
const createCategory = require("./postController/createCategory.controller");
const categories = Router();

categories.route("/").post(createCategory);
categories.route("/").get(getAllCategory);

module.exports = categories;
