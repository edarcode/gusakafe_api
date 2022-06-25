const { axios } = require("./axios");
const { SUPER_USERNAME, SUPER_PASSWORD } = process.env;

const authSuper = async () => {
	const { data } = await axios({
		url: "/auth",
		method: "POST",
		data: { username: SUPER_USERNAME, password: SUPER_PASSWORD }
	});
	return data.token;
};
module.exports = authSuper;
