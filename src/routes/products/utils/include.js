const { Category } = require("../../../db");

module.exports = {
	include: ({ idCategory }) => {
		if (idCategory) {
			return [
				{
					model: Category,
					as: "categories",
					where: { id: idCategory },
					through: { attributes: [] }
				}
			];
		}
		return [
			{
				model: Category,
				as: "categories",
				through: { attributes: [] }
			}
		];
	}
};
