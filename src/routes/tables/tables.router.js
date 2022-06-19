const { Router } = require("express");
const getAllTables = require("./getController/getAllTables.controller");
const tables = Router();

tables.route("/").get(getAllTables);

module.exports = tables;
