module.exports = {
	where: ({ name, min, max, Op, state }) => {
		const result = {};
		if (name) result.name = { [Op.iLike]: `%${name}%` };
		if (min) result.price = { [Op.gte]: min };
		if (max) result.price = { [Op.lte]: max };
		if (min && max) result.price = { [Op.between]: [min, max] };
		if (state) result.state = state;
		return result;
	}
};
