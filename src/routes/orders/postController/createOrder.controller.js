const createOrder = async (req, res, next) => {
	try {
		/* const {products} = req.body */
		res.status(200).json({ msg: "..." });
	} catch (error) {
		next(error);
	}
};

module.exports = createOrder;
