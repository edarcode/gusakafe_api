const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
	// defino el modelo
	sequelize.define(
		"Table",
		{
			state: {
				type: DataTypes.ENUM("busy", "available"),
				defaultValue: "available"
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true
			},
			code: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true
			}
		},
		{ timestamps: false }
	);
};
