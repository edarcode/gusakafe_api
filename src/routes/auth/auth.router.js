const { Router } = require("express");
const createAuthController = require("./postController/createAuth.controller");
const auth = Router();

auth.route("/").post(createAuthController);

module.exports = auth;
