const { chefs } = require("../data/chefs.json");
const authSuper = require("./authSuper");
const fillDb = require("./fillDb");

const fillChef = async () => {
	try {
		const token = await authSuper();
		await fillDb({
			data: chefs,
			url: "/chefs",
			modelName: "Chef",
			token
		});
	} catch (error) {
		console.log(error);
	}
};

module.exports = fillChef;
