const { categories } = require("../data/categories.json");
const { createCategory } = require("./createCategory");

const fillCategory = async () => {
	try {
		for (let i = 0; i < categories.length; i++) {
			const element = categories[i];
			await createCategory(element);
		}
	} catch (error) {
		console.log(error);
	}
};

module.exports = { fillCategory };
