const { createCategory } = require("../../../utils/createCategory");

const createCategoryController = async (req, res, next) => {
	try {
		const result = await createCategory(req.body);
		if (!result) return res.status(400).json({ msg: "required name and id" });
		const [category, created] = result;
		if (!created)
			return res.status(409).json({ msg: "already exists", category });
		res.status(201).json({ msg: "created successfully", category });
	} catch (error) {
		next(error);
	}
};

module.exports = createCategoryController;
