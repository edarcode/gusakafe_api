const { chefs } = require("../data/chefs.json");
const { createChef } = require("./createChef");

const fillChef = async () => {
	try {
		for (let i = 0; i < chefs.length; i++) {
			const element = chefs[i];
			await createChef(element);
		}
	} catch (error) {
		console.log(error);
	}
};

module.exports = { fillChef };
