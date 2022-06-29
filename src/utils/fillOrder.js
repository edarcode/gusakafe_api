const { orders } = require("../data/orders.json");
const { createOrder } = require("./createOrder");

const fillOrder = async () => {
	try {
		for (let i = 0; i < orders.length; i++) {
			const element = orders[i];
			await createOrder(element);
		}
	} catch (error) {
		console.log(error);
	}
};

module.exports = { fillOrder };
