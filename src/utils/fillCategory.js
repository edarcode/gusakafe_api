const { categories } = require("../data/categories.json");
const { axios } = require("./axios");

const promiseDefinition = item => {
	return axios({
		method: "POST",
		url: "/categories",
		data: item
	});
};

const fillCategory = async () => {
	const promiseDefinitions = categories.map(item => promiseDefinition(item));
	try {
		const data = await Promise.all(promiseDefinitions);
		if (data.length) console.log("categories full");
	} catch (error) {
		console.log(error);
	}
};

module.exports = fillCategory;
