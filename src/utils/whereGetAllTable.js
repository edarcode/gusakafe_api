module.exports = {
	whereGetAllTable: ({ name, state, Op }) => {
		const result = {};
		if (name) result.name = { [Op.iLike]: `%${name}%` };
		if (state) result.state = state;
		return result;
	}
};
