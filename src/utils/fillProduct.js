const { products } = require("../data/products.json");
const fillDb = require("./fillDb");

const fillProduct = async () => {
	try {
		await fillDb({ data: products, url: "/products", modelName: "Product" });
	} catch (error) {
		console.log(error);
	}
};

module.exports = fillProduct;
