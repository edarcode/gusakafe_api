// const { Table } = require("../../../db");

const getAllTables = async (req, res, next) => {
	try {
		res.json("tables");
	} catch (error) {
		next(error);
	}
};

module.exports = getAllTables;
