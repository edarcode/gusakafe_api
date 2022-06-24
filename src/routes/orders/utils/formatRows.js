module.exports = {
	formatRows: rows => {
		return rows.map(({ id, chef, table, duration, state, total, products }) => {
			const formatProducts = products.map(({ name, Detail }) => {
				return { name, amount: Detail.amount, price: Detail.price };
			});
			return {
				id,
				duration,
				chef: (chef && chef.name) || chef,
				table: (table && table.name) || table,
				state,
				total,
				products: formatProducts
			};
		});
	}
};
