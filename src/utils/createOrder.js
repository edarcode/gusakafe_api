const { Order, Product } = require("../db");

const createOrder = async ({ idTable, products }) => {
	const order = await Order.create();
	await order.setTable(idTable);
	let total = null;
	for (let i = 0; i < products.length; i++) {
		const item = products[i];
		const { id, amount } = item;
		const product = await Product.findByPk(id);
		const price = product.price;
		await order.addProduct(id, { through: { amount, price } });
		total += price * amount;
	}
	order.total = total;
	order.save();
	return order;
};

module.exports = { createOrder };
