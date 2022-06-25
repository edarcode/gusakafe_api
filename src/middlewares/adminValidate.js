const { admin } = require("../constants/roles");

module.exports = {
	adminValidate: (req, res, next) => {
		const { chef } = req;
		if (chef.role !== admin)
			return res.status(401).json({ msg: "unauthorized" });
		next();
	}
};
