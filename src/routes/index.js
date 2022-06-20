const { Router } = require("express");
const categories = require("./categories/categories.router");
const tables = require("./tables/tables.router");
const router = Router();

router.use("/tables", tables);
router.use("/categories", categories);

module.exports = router;
