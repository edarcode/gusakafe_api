const jwt = require("jsonwebtoken");
const { SECRET } = process.env;
const { Chef } = require("../db");

module.exports = {
	tokenValidate: async (req, res, next) => {
		try {
			const { token } = req.headers;
			if (!token) return res.status(400).json({ msg: "no token provided" });
			const { id } = jwt.verify(token, SECRET); /* lanza err si no es valido */
			const chef = await Chef.findByPk(id);
			if (!chef) return res.status(401).json({ msg: "unauthorized" });
			req.chef = chef;
			next();
		} catch (error) {
			res.status(401).json({ msg: "unauthorized" });
		}
	}
};
