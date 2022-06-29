const { Chef } = require("../db");
const { encryptPassword } = require("../utils/encryptPassword");

const createChef = async ({ username, name, email, tell, img, password }) => {
	const [chef, created] = await Chef.findOrCreate({
		where: { username },
		defaults: {
			name,
			email,
			tell,
			img,
			password: await encryptPassword(password)
		}
	});
	return [chef, created];
};

module.exports = { createChef };
