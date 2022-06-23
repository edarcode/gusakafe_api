const { Order, Chef, Table, Product } = require("../../../db");
const { where } = require("../utils/where");
const { ordersPerPage } = require("../../../constants/perPage");
const { formatRows } = require("../utils/formatRows");
const { include } = require("../utils/include");

const getAllOrders = async (req, res, next) => {
	const { page = 0, state } = req.query;
	try {
		const { count, rows } = await Order.findAndCountAll({
			where: where({ state }),
			offset: ordersPerPage * page,
			limit: ordersPerPage,
			attributes: ["id", "duration", "state", "total"],
			include: include({ Chef, Table, Product }),
			distinct: true
		});
		if (!rows.length) return res.status(404).json({ msg: "not found" });
		const data = {
			page: parseInt(page),
			ordersPerPage,
			pageCount: Math.ceil(count / ordersPerPage),
			ordersCount: count,
			orders: formatRows(rows)
		};
		res.status(200).json(data);
	} catch (error) {
		next(error);
	}
};

module.exports = getAllOrders;
