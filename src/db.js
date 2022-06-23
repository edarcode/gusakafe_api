const { Sequelize, Op } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
	`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
	{ logging: false, native: false }
);
const basename = path.basename(__filename); // me da el nombre del archivo donde estoy si le paso una ruta, _filename es la ruta donde estoy

const modelDefiners = []; // seria un array de cada modelo

// Leemos todos los archivos de la carpeta models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models")) // ["file1.js","file2.js"]
	.filter(
		element =>
			element.indexOf(".") !== 0 &&
			element !== basename &&
			element.slice(-3) === ".js"
	) // ["file1","file2"]
	.forEach(element => {
		modelDefiners.push(require(path.join(__dirname, "/models", element))); // empezamos a requerir cada model y lo pusheamos a modelDefiners
	});

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const { Table, Order, Chef, Product, Category, Detail } = sequelize.models;

// Relaciones

Table.hasMany(Order);
Order.belongsTo(Table, { as: "table" });

Chef.hasMany(Order);
Order.belongsTo(Chef, { as: "chef" });

Order.belongsToMany(Product, {
	through: Detail,
	as: "products",
	timestamps: false
});
Product.belongsToMany(Order, {
	through: "Order_Product",
	timestamps: false
});

Product.belongsToMany(Category, {
	through: "Product_Category",
	as: "categories",
	timestamps: false
});

Category.belongsToMany(Product, {
	through: "Product_Category",
	timestamps: false
});

module.exports = {
	Op,
	...sequelize.models,
	conn: sequelize
};
