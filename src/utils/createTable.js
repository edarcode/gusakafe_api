const { Table } = require("../db");

const createTable = async ({ name, code }) => {
	const [table, created] = await Table.findOrCreate({
		where: { name },
		defaults: { code }
	});
	return [table, created];
};

module.exports = { createTable };
