const { tables } = require("../data/tables.json");

const fillDb = require("./fillDb");

const fillTable = async () => {
	try {
		await fillDb({
			data: tables,
			url: "/tables",
			modelName: "Table"
		});
	} catch (error) {
		console.log(error);
	}
};

module.exports = fillTable;
