const { Product } = require("../db");

const createProduct = async ({ name, price, img, categories }) => {
	const [product, created] = await Product.findOrCreate({
		where: { name },
		defaults: { price, img }
	});
	if (created) await product.setCategories(categories);
	return [product, created];
};

module.exports = { createProduct };
