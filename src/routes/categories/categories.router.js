const { Router } = require("express");
const deleteCategory = require("./deleteController/deleteCategory.controller");
const getAllCategory = require("./getController/getAllCategories.controller");
const createCategory = require("./postController/createCategory.controller");
const categories = Router();

categories.route("/").post(createCategory);
categories.route("/").get(getAllCategory);
categories.route("/").delete(deleteCategory);

module.exports = categories;
