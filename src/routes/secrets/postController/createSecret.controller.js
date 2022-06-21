const { Secret } = require("../../../db");

const createSecret = async (req, res, next) => {
	try {
		const { code } = req.body;
		if (!code) return res.status(400).json({ msg: "required code" });
		const [secret, created] = await Secret.findOrCreate({
			where: { code }
		});
		if (!created)
			return res.status(409).json({ msg: "already exists", secret });
		res.status(201).json({ msg: "created successfully", secret });
	} catch (error) {
		next(error);
	}
};

module.exports = createSecret;
