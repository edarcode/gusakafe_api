module.exports = {
	formatRows: rows => {
		return rows.map(({ id, Chef, Table, duration, state, total, products }) => {
			const formatProducts = products.map(({ name, Detail }) => {
				return { name, amount: Detail.amount, price: Detail.price };
			});
			return {
				id,
				duration,
				chef: (Chef && Chef.name) || Chef,
				table: (Table && Table.name) || Table,
				state,
				total,
				products: formatProducts
			};
		});
	}
};
