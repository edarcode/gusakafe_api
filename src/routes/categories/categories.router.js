const { Router } = require("express");
const deleteCategory = require("./deleteController/deleteCategory.controller");
const getAllCategory = require("./getController/getAllCategories.controller");
const createCategoryController = require("./postController/createCategory.controller");
const categories = Router();

categories.route("/").post(createCategoryController);
categories.route("/").get(getAllCategory);
categories.route("/").delete(deleteCategory);

module.exports = categories;
