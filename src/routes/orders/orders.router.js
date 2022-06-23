const { Router } = require("express");
const getAllOrders = require("./getController/getAllOrders.controller");
const createOrder = require("./postController/createOrder.controller");
const orders = Router();

orders.route("/").post(createOrder);
orders.route("/").get(getAllOrders);

module.exports = orders;
