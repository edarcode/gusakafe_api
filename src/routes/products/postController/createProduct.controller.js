const { Product } = require("../../../db");

const createProduct = async (req, res, next) => {
	const { name, price, img, categories } = req.body;
	try {
		const [product, created] = await Product.findOrCreate({
			where: { name },
			defaults: { price, img }
		});
		if (!created)
			return res.status(409).json({ msg: "already exists", product });
		await product.setCategories(categories);
		res.status(201).json({ msg: "created successfully", product });
	} catch (error) {
		const product = await Product.findOne({ where: { name } });
		if (product) await Product.destroy({ where: { id: product.id } });
		next(error);
	}
};

module.exports = createProduct;
