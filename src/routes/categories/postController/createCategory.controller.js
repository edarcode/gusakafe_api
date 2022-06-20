const { Category } = require("../../../db");

const createCategory = async (req, res, next) => {
	try {
		const { name } = req.body;
		if (!name) return res.status(400).json({ msg: "required name" });
		const [category, created] = Category.findOrCreate({
			where: { name }
		});
		if (!created) return res.status(409).json({ msg: "already exists" });
		res.status(200).json({ msg: "created successfully" }, category);
	} catch (error) {
		next(error);
	}
};

module.exports = createCategory;
