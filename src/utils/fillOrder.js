const { orders } = require("../data/orders.json");
const fillDb = require("./fillDb");

const fillOrder = async () => {
	try {
		await fillDb({ data: orders, url: "/orders", modelName: "Order" });
	} catch (error) {
		console.log(error);
	}
};

module.exports = fillOrder;
