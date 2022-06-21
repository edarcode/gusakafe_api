const { axios } = require("./axios");

const fillDb = async ({ data, url, modelName }) => {
	for (let i = 0; i < data.length; i++) {
		const element = data[i];
		await axios({
			method: "POST",
			url,
			data: element
		});
	}
	console.log(`*********************** ${modelName} full *******************`);
};

module.exports = fillDb;
