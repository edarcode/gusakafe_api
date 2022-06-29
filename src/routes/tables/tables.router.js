const { Router } = require("express");
const updateTable = require("./putController/updateTable.controller");
const getTable = require("./getController/getTable.controller");
const busyTableController = require("./patchController/busyTable.controller");
const getAllTablesController = require("./getController/getAllTables.controller");
const createTableController = require("./postController/createTable.controller");
const tables = Router();

tables.route("/").post(createTableController);
tables.route("/:id").get(getTable);
tables.route("/").get(getAllTablesController);
tables.route("/").patch(busyTableController);
tables.route("/").put(updateTable);

module.exports = tables;
