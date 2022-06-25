const { admin } = require("../../../constants/roles");
const { Chef } = require("../../../db");
const { encryptPassword } = require("../../../utils/encryptPassword");
const { SUPER_USERNAME, SUPER_PASSWORD } = process.env;

const createSuper = async (req, res, next) => {
	try {
		await Chef.create({
			username: SUPER_USERNAME,
			password: await encryptPassword(SUPER_PASSWORD),
			role: admin,
			name: "super"
		});
		res.status(200).json({ msg: "super created successfully" });
	} catch (error) {
		next(error);
	}
};

module.exports = createSuper;
