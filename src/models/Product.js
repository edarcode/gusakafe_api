const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
	// defino el modelo
	sequelize.define(
		"Product",
		{
			state: {
				type: DataTypes.BOOLEAN,
				defaultValue: true
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true
			},
			price: {
				type: DataTypes.REAL,
				allowNull: false,
				validate: {
					min: 0
				}
			},
			img: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					isUrl: true
				}
			}
		},
		{ timestamps: false }
	);
};
