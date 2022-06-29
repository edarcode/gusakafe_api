const { Router } = require("express");
const deleteProductController = require("./deleteController/deleteProduct.controller");
const getAllProducts = require("./getController/getAllProducts.controller");
const createProductController = require("./postController/createProduct.controller");
const updateProduct = require("./putController/updateProduct.controller");
const products = Router();

products.route("/").post(createProductController);
products.route("/").get(getAllProducts);
products.route("/").delete(deleteProductController);
products.route("/").put(updateProduct);

module.exports = products;
