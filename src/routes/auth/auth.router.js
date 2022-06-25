const { Router } = require("express");
const createAuth = require("./postController/createAuth.controller");
const auth = Router();

auth.route("/").post(createAuth);

module.exports = auth;
