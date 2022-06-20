const { Category } = require("../../../db");

const getAllCategory = async (req, res, next) => {
	try {
		const categories = await Category.findAll();
		res.status(200).json(categories);
	} catch (error) {
		next(error);
	}
};

module.exports = getAllCategory;
