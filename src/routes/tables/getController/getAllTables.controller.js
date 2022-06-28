const { getAllTables } = require("../../../utils/getAllTables");

const getAllTablesController = async (req, res, next) => {
	try {
		const data = await getAllTables(req.query);
		if (data === null) return res.status(404).json({ msg: "not found" });
		res.status(200).json(data);
	} catch (error) {
		next(error);
	}
};

module.exports = getAllTablesController;
