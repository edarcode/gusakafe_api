const { Table } = require("../db");

module.exports = {
	busyTable: async ({ id, code }) => {
		const table = await Table.findByPk(id);
		if (!table || code !== table.code) return false;
		await table.update({ state: "busy" });
		await table.save();
		return true;
	}
};
