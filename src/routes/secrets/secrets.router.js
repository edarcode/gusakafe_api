const { Router } = require("express");
const deleteSecret = require("./deleteController/deleteSecret.controller");
const getAllSecrets = require("./getController/getAllSecrets.controller");
const createSecret = require("./postController/createSecret.controller");
const secrets = Router();

secrets.route("/").post(createSecret);
secrets.route("/").get(getAllSecrets);
secrets.route("/").delete(deleteSecret);

module.exports = secrets;
