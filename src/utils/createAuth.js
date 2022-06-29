const { Chef } = require("../db");
const { comparePassword } = require("../utils/comparePassword");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

const createAuth = async ({ password, username }) => {
	const chef = await Chef.findOne({ where: { username } });
	if (!chef) return null;
	const isAuth = await comparePassword(password, chef.password);
	if (!isAuth) return null;
	const token = jwt.sign({ id: chef.id }, SECRET, { expiresIn: "24h" });
	return token;
};

module.exports = { createAuth };
