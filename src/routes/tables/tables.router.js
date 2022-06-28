const { Router } = require("express");
const createTable = require("./postController/createTable.controller");
const updateTable = require("./putController/updateTable.controller");
const getTable = require("./getController/getTable.controller");
const busyTableController = require("./patchController/busyTable.controller");
const getAllTablesController = require("./getController/getAllTables.controller");
const tables = Router();

tables.route("/").post(createTable);
tables.route("/:id").get(getTable);
tables.route("/").get(getAllTablesController);
tables.route("/").patch(busyTableController);
tables.route("/").put(updateTable);

module.exports = tables;
