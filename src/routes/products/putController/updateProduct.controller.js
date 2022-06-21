const { Product } = require("../../../db");

const updateProduct = async (req, res, next) => {
	try {
		const { id, name, price, img, state, categories } = req.body;
		const product = await Product.findByPk(id);
		if (!product) return res.status(404).json({ msg: "not found" });
		await product.update({
			name,
			price,
			img,
			state
		});
		await product.save();
		if (categories) await product.setCategories(categories);
		res.status(200).json({ msg: "updated successfully" });
	} catch (error) {
		next(error);
	}
};

module.exports = updateProduct;
