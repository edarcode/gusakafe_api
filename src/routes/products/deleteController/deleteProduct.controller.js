const { deleteProduct } = require("../../../utils/deleteProduct");

const deleteProductController = async (req, res, next) => {
	try {
		const isDestroy = await deleteProduct(req.query);
		if (isDestroy) return res.status(200).json({ msg: "destroy successfully" });
		res.status(404).json({ msg: "not found" });
	} catch (error) {
		next(error);
	}
};

module.exports = deleteProductController;
