const { Chef } = require("../../../db");

const createChef = async (req, res, next) => {
	try {
		const { username, name, email, tell, img } = req.body;
		const [chef, created] = await Chef.findOrCreate({
			where: { username },
			defaults: { name, email, tell, img }
		});
		if (!created) return res.status(409).json({ msg: "already exists", chef });
		res.status(201).json({ msg: "created successfully", chef });
	} catch (error) {
		next(error);
	}
};

module.exports = createChef;
