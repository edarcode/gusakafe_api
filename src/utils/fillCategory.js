const { categories } = require("../data/categories.json");
const { axios } = require("./axios");

const fillCategory = async () => {
	try {
		for (let i = 0; i < categories.length; i++) {
			const element = categories[i];
			await axios({
				method: "POST",
				url: "/categories",
				data: element
			});
		}
		console.log("*********************** categories full *******************");
	} catch (error) {
		console.log(error);
	}
};

module.exports = fillCategory;
