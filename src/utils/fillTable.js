const { tables } = require("../data/tables.json");
const { createTable } = require("./createTable");

const fillTable = async () => {
	try {
		for (let i = 0; i < tables.length; i++) {
			const element = tables[i];
			await createTable(element);
		}
	} catch (error) {
		console.log(error);
	}
};

module.exports = { fillTable };
