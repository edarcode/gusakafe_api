const { chefs } = require("../data/chefs.json");

const fillDb = require("./fillDb");

const fillChef = async () => {
	try {
		await fillDb({
			data: chefs,
			url: "/chefs",
			modelName: "Chef"
		});
	} catch (error) {
		console.log(error);
	}
};

module.exports = fillChef;
