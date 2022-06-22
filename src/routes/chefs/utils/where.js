module.exports = {
	where: ({ name, Op, state }) => {
		const result = {};
		if (name) result.name = { [Op.iLike]: `%${name}%` };
		if (state) result.state = state;
		return result;
	}
};
