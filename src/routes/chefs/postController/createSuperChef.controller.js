const { createSuperChef } = require("../../../utils/createSuperChef");

const createSuperChefController = async (req, res, next) => {
	try {
		await createSuperChef();
		res.status(200).json({ msg: "super created successfully" });
	} catch (error) {
		next(error);
	}
};

module.exports = createSuperChefController;
