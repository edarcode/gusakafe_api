const { Router } = require("express");
const tables = require("./tables/tables.router");
const router = Router();

router.use("/tables", tables);

module.exports = router;
