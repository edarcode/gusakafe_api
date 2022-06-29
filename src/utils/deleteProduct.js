const { Product } = require("../db");

const deleteProduct = async ({ id }) => {
	const isDestroy = await Product.destroy({ where: { id } });
	return isDestroy;
};

module.exports = { deleteProduct };
