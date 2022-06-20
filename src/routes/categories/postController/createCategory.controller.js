const { Category } = require("../../../db");

const createCategory = async (req, res, next) => {
	try {
		const { name, img } = req.body;
		if (!name) return res.status(400).json({ msg: "required name" });
		if (!img) return res.status(400).json({ msg: "required img" });
		const [category, created] = await Category.findOrCreate({
			where: { name },
			defaults: { img }
		});
		if (!created)
			return res.status(409).json({ msg: "already exists", category });
		res.status(201).json({ msg: "created successfully", category });
	} catch (error) {
		next(error);
	}
};

module.exports = createCategory;
