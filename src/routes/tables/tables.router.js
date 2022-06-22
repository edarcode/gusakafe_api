const { Router } = require("express");
const getAllTables = require("./getController/getAllTables.controller");
const createTable = require("./postController/createTable.controller");
const tables = Router();

tables.route("/").post(createTable);
tables.route("/").get(getAllTables);

module.exports = tables;
