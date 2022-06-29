const { products } = require("../data/products.json");
const { createProduct } = require("./createProduct");

const fillProduct = async () => {
	try {
		for (let i = 0; i < products.length; i++) {
			const element = products[i];
			await createProduct(element);
		}
	} catch (error) {
		console.log(error);
	}
};

module.exports = { fillProduct };
