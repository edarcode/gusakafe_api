module.exports = {
	include: ({ Chef, Table, Product }) => {
		return [
			{
				model: Chef,
				attributes: ["name"]
			},
			{
				model: Table,
				attributes: ["name"]
			},
			{
				model: Product,
				as: "products",
				attributes: ["name"],
				through: { attributes: ["amount", "price"] }
			}
		];
	}
};
