const { Secret } = require("../../../db");

const getAllSecrets = async (req, res, next) => {
	try {
		const secrets = await Secret.findAll();
		res.status(200).json(secrets);
	} catch (error) {
		next(error);
	}
};

module.exports = getAllSecrets;
