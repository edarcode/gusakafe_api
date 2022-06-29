const { createOrder } = require("../../../utils/createOrder");

const createOrderController = async (req, res, next) => {
	try {
		const order = await createOrder(req.body);
		res.status(201).json({ msg: "successfully", order });
	} catch (error) {
		next(error);
	}
};

module.exports = createOrderController;
