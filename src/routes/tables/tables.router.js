const { Router } = require("express");
const getAllTables = require("./getController/getAllTables.controller");
const createTable = require("./postController/createTable.controller");
const busyTable = require("./patchController/busyTable.controller");
const updateTable = require("./putController/updateTable.controller");
const tables = Router();

tables.route("/").post(createTable);
tables.route("/").get(getAllTables);
tables.route("/").patch(busyTable);
tables.route("/").put(updateTable);

module.exports = tables;
