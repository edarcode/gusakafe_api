const { busyTable } = require("../../../utils/busyTable");

const busyTableController = async (req, res, next) => {
	try {
		const isBusy = await busyTable(req.body);
		if (!isBusy) return res.status(400).json({ msg: "err" });
		res.status(200).json({ msg: "successfully occupied table" });
	} catch (error) {
		next(error);
	}
};

module.exports = busyTableController;
