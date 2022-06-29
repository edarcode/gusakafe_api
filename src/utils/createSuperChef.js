const { admin } = require("../constants/roles");
const { Chef } = require("../db");
const { encryptPassword } = require("../utils/encryptPassword");
const { SUPER_CHEF_USERNAME, SUPER_CHEF_PASSWORD } = process.env;

const createSuperChef = async () => {
	await Chef.create({
		username: SUPER_CHEF_USERNAME,
		password: await encryptPassword(SUPER_CHEF_PASSWORD),
		role: admin,
		name: "super"
	});
};

module.exports = { createSuperChef };
