const { secrets } = require("../data/secrets.json");

const fillDb = require("./fillDb");

const fillSecret = async () => {
	try {
		await fillDb({
			data: secrets,
			url: "/secrets",
			modelName: "Secret"
		});
	} catch (error) {
		console.log(error);
	}
};

module.exports = fillSecret;
