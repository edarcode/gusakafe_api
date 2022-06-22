const { Router } = require("express");
const createOrder = require("./postController/createOrder.controller");
const orders = Router();

orders.route("/").post(createOrder);

module.exports = orders;
