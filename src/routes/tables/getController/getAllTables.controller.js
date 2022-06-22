const { tablesPerPage } = require("../../../constants/perPage");
const { Table, Op } = require("../../../db");
const { where } = require("../utils/where");

const getAllTables = async (req, res, next) => {
	const { page = 0, name, state } = req.query;
	try {
		const { count, rows } = await Table.findAndCountAll({
			where: where({ name, Op, state }),
			offset: tablesPerPage * page,
			limit: tablesPerPage,
			attributes: ["id", "name", "code", "state"]
		});
		if (!rows.length) return res.status(404).json({ msg: "not found" });
		const data = {
			page: parseInt(page),
			tablesPerPage,
			pageCount: Math.ceil(count / tablesPerPage),
			tablesCount: count,
			tables: rows
		};
		res.status(200).json(data);
	} catch (error) {
		next(error);
	}
};

module.exports = getAllTables;
