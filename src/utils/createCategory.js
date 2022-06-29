const { Category } = require("../db");

const createCategory = async ({ name, img }) => {
	if (!name || !img) return null;
	const [category, created] = await Category.findOrCreate({
		where: { name },
		defaults: { img }
	});
	return [category, created];
};

module.exports = { createCategory };
