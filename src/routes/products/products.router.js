const { Router } = require("express");
const createProduct = require("./postController/createProduct.controller");
const products = Router();

products.route("/").post(createProduct);

module.exports = products;
