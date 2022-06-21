const { categories } = require("../data/categories.json");

const fillDb = require("./fillDb");

const fillCategory = async () => {
	try {
		await fillDb({
			data: categories,
			url: "/categories",
			modelName: "Category"
		});
	} catch (error) {
		console.log(error);
	}
};

module.exports = fillCategory;
