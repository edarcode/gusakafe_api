const { Router } = require("express");
const getAllTables = require("./getController/getAllTables.controller");
const createTable = require("./postController/createTable.controller");
const updateTable = require("./putController/updateTable.controller");
const tables = Router();

tables.route("/").post(createTable);
tables.route("/").get(getAllTables);
tables.route("/").put(updateTable);

module.exports = tables;
