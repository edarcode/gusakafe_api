const { Table, Op } = require("../db");
const { tablesPerPage } = require("../constants/perPage");
const { whereGetAllTable } = require("./whereGetAllTable");

module.exports = {
	getAllTables: async ({ page = 0, name, state }) => {
		const { count, rows } = await Table.findAndCountAll({
			where: whereGetAllTable({ name, Op, state }),
			offset: tablesPerPage * page,
			limit: tablesPerPage,
			attributes: ["id", "name", "code", "state"]
		});
		if (!rows.length) return null;
		const data = {
			page: parseInt(page),
			tablesPerPage,
			pageCount: Math.ceil(count / tablesPerPage),
			tablesCount: count,
			tables: rows
		};
		return data;
	}
};
