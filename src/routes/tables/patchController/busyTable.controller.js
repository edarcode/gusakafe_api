const { Table } = require("../../../db");

const busyTable = async (req, res, next) => {
	try {
		const { id, code } = req.body;
		const table = await Table.findByPk(id);
		if (!table) return res.status(404).json({ msg: "not found" });
		if (code !== table.code) return res.status(400).json({ msg: "err code" });
		await table.update({ state: "busy" });
		await table.save();
		res.status(200).json({ msg: "successfully occupied table" });
	} catch (error) {
		next(error);
	}
};

module.exports = busyTable;
