const { Router } = require("express");
const getAllProducts = require("./getController/getAllProducts.controller");
const createProduct = require("./postController/createProduct.controller");
const products = Router();

products.route("/").post(createProduct);
products.route("/").get(getAllProducts);

module.exports = products;
