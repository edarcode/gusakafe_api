module.exports = {
	where: ({ name, state, Op }) => {
		if (name) {
			return {
				name: { [Op.iLike]: `%${name}%` },
				state: (state && state) || "available"
			};
		} else {
			return {
				state: (state && state) || "available"
			};
		}
	}
};
