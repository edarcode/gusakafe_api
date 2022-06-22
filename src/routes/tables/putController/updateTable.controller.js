const { Table } = require("../../../db");

const updateTable = async (req, res, next) => {
	try {
		const { id, name, code, state } = req.body;
		const table = await Table.findByPk(id);
		if (!table) return res.status(404).json({ msg: "not found" });
		await table.update({
			name,
			code,
			state
		});
		await table.save();
		res.status(200).json({ msg: "updated successfully" });
	} catch (error) {
		next(error);
	}
};

module.exports = updateTable;
