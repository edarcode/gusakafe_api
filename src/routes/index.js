const { Router } = require("express");
const auth = require("./auth/auth.router");
const categories = require("./categories/categories.router");
const chefs = require("./chefs/chefs.router");
const orders = require("./orders/orders.router");
const products = require("./products/products.router");

const tables = require("./tables/tables.router");
const router = Router();

router.use("/tables", tables);
router.use("/categories", categories);
router.use("/products", products);
router.use("/chefs", chefs);
router.use("/orders", orders);
router.use("/auth", auth);

module.exports = router;
