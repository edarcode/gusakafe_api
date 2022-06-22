const { Table } = require("../../../db");

const createTable = async (req, res, next) => {
	try {
		const { name, code } = req.body;
		const [table, created] = await Table.findOrCreate({
			where: { name },
			defaults: { code }
		});
		if (!created) return res.status(409).json({ msg: "already exists", table });
		res.status(201).json({ msg: "created successfully", table });
	} catch (error) {
		next(error);
	}
};

module.exports = createTable;
