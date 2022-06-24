const { Chef } = require("../../../db");
const { comparePassword } = require("../../../utils/comparePassword");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

const authChef = async (req, res, next) => {
	try {
		const { password, username } = req.body;
		const chef = await Chef.findOne({ where: { username } });
		if (!chef) return res.status(404).json({ msg: "not found" });
		const isAuth = await comparePassword(password, chef.password);
		if (!isAuth) return res.status(400).json({ msg: "no auth" });
		const token = jwt.sign({ id: chef.id }, SECRET, { expiresIn: "24h" });
		res.json({ token, username });
	} catch (error) {
		next(error);
	}
};

module.exports = authChef;
