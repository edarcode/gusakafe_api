const { createTable } = require("../../../utils/createTable");

const createTableController = async (req, res, next) => {
	try {
		const [table, created] = await createTable(req.body);
		if (!created) return res.status(409).json({ msg: "already exists", table });
		res.status(201).json({ msg: "created successfully", table });
	} catch (error) {
		next(error);
	}
};

module.exports = createTableController;
