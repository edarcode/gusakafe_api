const { Router } = require("express");
const categories = require("./categories/categories.router");
const chefs = require("./chefs/chefs.router");
const products = require("./products/products.router");

const tables = require("./tables/tables.router");
const router = Router();

router.use("/tables", tables);
router.use("/categories", categories);
router.use("/products", products);
router.use("/chefs", chefs);

module.exports = router;
