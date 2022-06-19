const Axios = require("axios");

const axiosInstance = Axios.create({
	baseURL: process.env.baseURL
});

module.exports = {
	axios: async config => {
		return await axiosInstance(config);
	}
};
