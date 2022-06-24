const { Order } = require("../../../db");

const updateOrder = async (req, res, next) => {
	try {
		const { id, state, duration, idChef } = req.body;
		if (state && idChef)
			return res
				.status(400)
				.json({ msg: "err state and idChef cannot be together" });
		if (idChef && !duration)
			return res.status(400).json({ msg: "required duration" });
		if (!idChef && duration)
			return res.status(400).json({ msg: "required idChef" });
		const order = await Order.findByPk(id);
		if (order.ChefId !== null)
			return res.status(400).json({ msg: "the order has already been taken" });
		if (!order) return res.status(404).json({ msg: "not found" });
		await order.update({
			duration,
			state
		});
		await order.save();
		await order.setChef(idChef);
		res.status(200).json({ msg: "updated successfully" });
	} catch (error) {
		next(error);
	}
};

module.exports = updateOrder;
