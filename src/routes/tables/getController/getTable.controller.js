const { Table } = require("../../../db");

const getTable = async (req, res, next) => {
	const { id } = req.params;
	try {
		const table = await Table.findByPk(id);
		console.log(table);
		if (!table) return res.status(404).json({ msg: "not found" });
		res.status(200).json(table);
	} catch (error) {
		next(error);
	}
};

module.exports = getTable;
