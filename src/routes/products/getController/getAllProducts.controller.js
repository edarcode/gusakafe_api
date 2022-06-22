const { Product, Op } = require("../../../db");
const { where } = require("../utils/where");
const { include } = require("../utils/include");
const { productsPerPage } = require("../../../constants/perPage");

const getAllProducts = async (req, res, next) => {
	const { page = 0, name, min, max, idCategory, state } = req.query;
	try {
		const { count, rows } = await Product.findAndCountAll({
			where: where({ name, min, max, state, Op }),
			offset: productsPerPage * page,
			limit: productsPerPage,
			attributes: ["id", "name", "price", "img", "state"],
			include: include({ idCategory }),
			distinct: true
		});
		if (!rows.length) return res.status(404).json({ msg: "not found" });
		const data = {
			page: parseInt(page),
			productsPerPage,
			pageCount: Math.ceil(count / productsPerPage),
			productsCount: count,
			products: rows
		};
		res.status(200).json(data);
	} catch (error) {
		next(error);
	}
};

module.exports = getAllProducts;
