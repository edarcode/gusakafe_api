module.exports = {
	where: ({ state }) => {
		const result = {};
		if (state) result.state = state;
		return result;
	}
};
