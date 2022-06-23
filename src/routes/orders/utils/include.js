module.exports = {
	include: ({ Chef, Table, Product }) => {
		return [
			{
				model: Chef,
				as: "chef",
				attributes: ["name"]
			},
			{
				model: Table,
				as: "table",
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
