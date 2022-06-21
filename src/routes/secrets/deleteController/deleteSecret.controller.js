const { Secret } = require("../../../db");

const deleteSecret = async (req, res, next) => {
	try {
		const { id } = req.query;
		const isDestroy = await Secret.destroy({ where: { id } });
		if (isDestroy) return res.status(200).json({ msg: "destroy successfully" });
		res.status(404).json({ msg: "not found" });
	} catch (error) {
		next(error);
	}
};

module.exports = deleteSecret;
