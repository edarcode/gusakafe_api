const { axios } = require("./axios");

const createSuper = async () => {
	try {
		await axios({ url: "/chefs/super", method: "POST" });
	} catch (error) {
		console.log(error);
	}
};

module.exports = createSuper;
