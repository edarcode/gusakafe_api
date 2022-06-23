const { Order, Product } = require("../../../db");

const createOrder = async (req, res, next) => {
	try {
		const { idTable, products } = req.body;
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
		res.status(201).json({ msg: "successfully", order });
	} catch (error) {
		next(error);
	}
};

module.exports = createOrder;
