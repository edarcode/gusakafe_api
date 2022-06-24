const { Router } = require("express");
const getAllOrders = require("./getController/getAllOrders.controller");
const createOrder = require("./postController/createOrder.controller");
const updateOrder = require("./putController/updateOrder.controller");
const orders = Router();

orders.route("/").post(createOrder);
orders.route("/").get(getAllOrders);
orders.route("/").put(updateOrder);

module.exports = orders;
