const { createAuth } = require("../../../utils/createAuth");

const createAuthController = async (req, res, next) => {
	try {
		const { username } = req.body;
		const token = await createAuth(req.body);
		if (!token) return res.status(400).json({ msg: "no auth" });
		res.json({ token, username });
	} catch (error) {
		next(error);
	}
};

module.exports = createAuthController;
