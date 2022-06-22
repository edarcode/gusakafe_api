const { chefsPerPage } = require("../../../constants/perPage");
const { Chef, Op } = require("../../../db");

const getAllChefs = async (req, res, next) => {
	const { page = 0, name } = req.query;
	try {
		const { count, rows } = await Chef.findAndCountAll({
			where: (name && { name: { [Op.iLike]: `%${name}%` } }) || {},
			offset: chefsPerPage * page,
			limit: chefsPerPage,
			attributes: ["id", "name", "username", "email", "tell", "img"]
		});
		if (!rows.length) return res.status(404).json({ msg: "not found" });
		const data = {
			page: parseInt(page),
			chefsPerPage,
			pageCount: Math.ceil(count / chefsPerPage),
			chefsCount: count,
			chefs: rows
		};
		res.status(200).json(data);
	} catch (error) {
		next(error);
	}
};

module.exports = getAllChefs;
