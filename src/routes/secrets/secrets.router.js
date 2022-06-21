const { Router } = require("express");
const getAllSecrets = require("./getController/getAllSecrets.controller");
const createSecret = require("./postController/createSecret.controller");
const secrets = Router();

secrets.route("/").post(createSecret);
secrets.route("/").get(getAllSecrets);

module.exports = secrets;
