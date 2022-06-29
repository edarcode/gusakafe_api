const { createChef } = require("../../../utils/createChef");

const createChefController = async (req, res, next) => {
	try {
		const [chef, created] = await createChef(req.body);
		if (!created) return res.status(409).json({ msg: "already exists", chef });
		res.status(201).json({ msg: "created successfully", chef });
	} catch (error) {
		next(error);
	}
};

module.exports = createChefController;
