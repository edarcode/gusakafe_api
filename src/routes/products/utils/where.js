module.exports = {
	where: ({ name, min, max, Op, state }) => {
		if (min && max && name) {
			return {
				name: { [Op.iLike]: `%${name}%` },
				price: { [Op.between]: [min, max] },
				state: (state && state) || true
			};
		} else if (min && max) {
			return {
				price: { [Op.between]: [min, max] },
				state: (state && state) || true
			};
		} else if (name && min) {
			return {
				name: { [Op.iLike]: `%${name}%` },
				price: { [Op.gte]: min },
				state: (state && state) || true
			};
		} else if (name && max) {
			return {
				name: { [Op.iLike]: `%${name}%` },
				price: { [Op.lte]: max },
				state: (state && state) || true
			};
		} else if (name) {
			return {
				name: { [Op.iLike]: `%${name}%` },
				state: (state && state) || true
			};
		} else if (min) {
			return {
				price: { [Op.gte]: min }, // >=
				state: (state && state) || true
			};
		} else if (max) {
			return {
				price: { [Op.lte]: max }, // <=
				state: (state && state) || true
			};
		} else {
			return { state: (state && state) || true };
		}
	}
};
