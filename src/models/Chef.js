const { DataTypes } = require("sequelize");
const { chef, admin } = require("../constants/roles");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
	// defino el modelo
	sequelize.define(
		"Chef",
		{
			state: {
				type: DataTypes.BOOLEAN,
				defaultValue: true
			},
			username: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true
			},
			role: {
				type: DataTypes.ENUM(chef, admin),
				defaultValue: chef
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true
			},
			email: {
				type: DataTypes.STRING,
				validator: {
					isEmail: true
				},
				unique: true
			},
			tell: {
				type: DataTypes.BIGINT
			},
			img: {
				type: DataTypes.STRING,
				validate: {
					isUrl: true
				}
			}
		},
		{ timestamps: false }
	);
};
