const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
	// defino el modelo
	sequelize.define(
		"Order",
		{
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true
			},
			tell: {
				type: DataTypes.BIGINT
			},
			state: {
				type: DataTypes.ENUM("done", "pending"),
				defaultValue: "pending"
			}
		},
		{ timestamps: false }
	);
};
