const { Chef } = require("../../../db");

const updateChef = async (req, res, next) => {
	try {
		const { id, name, username, img, state } = req.body;
		const chef = await Chef.findByPk(id);
		if (!chef) return res.status(404).json({ msg: "not found" });
		await chef.update({
			name,
			username,
			img,
			state
		});
		await chef.save();
		res.status(200).json({ msg: "updated successfully" });
	} catch (error) {
		next(error);
	}
};

module.exports = updateChef;
