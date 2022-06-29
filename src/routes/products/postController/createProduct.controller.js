const { createProduct } = require("../../../utils/createProduct");

const createProductController = async (req, res, next) => {
	try {
		const [product, created] = await createProduct(req.body);
		if (!created)
			return res.status(409).json({ msg: "already exists", product });
		res.status(201).json({ msg: "created successfully", product });
	} catch (error) {
		next(error);
	}
};

module.exports = createProductController;
