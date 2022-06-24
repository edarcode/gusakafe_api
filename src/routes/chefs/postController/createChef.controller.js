const { Chef } = require("../../../db");
const { encryptPassword } = require("../../../utils/encryptPassword");

const createChef = async (req, res, next) => {
	try {
		const { username, name, email, tell, img, password } = req.body;
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
		if (!created) return res.status(409).json({ msg: "already exists", chef });
		res.status(201).json({ msg: "created successfully", chef });
	} catch (error) {
		next(error);
	}
};

module.exports = createChef;
