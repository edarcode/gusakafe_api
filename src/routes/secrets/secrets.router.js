const { Router } = require("express");
const createSecret = require("./postController/createSecret.controller");
const secrets = Router();

secrets.route("/").post(createSecret);

module.exports = secrets;
