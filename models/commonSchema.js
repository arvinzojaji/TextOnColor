module.exports = function (DataTypes) {
	var schema = {
		red: {
			type: DataTypes.INTEGER,
			min: 0,
			max: 255,
			allowNull: false
		},
		green: {
			type: DataTypes.INTEGER,
			min: 0,
			max: 255,
			allowNull: false
		},
		blue: {
			type: DataTypes.INTEGER,
			min: 0,
			max: 255,
			allowNull: false
		},
		grayscale: {
			type: DataTypes.DOUBLE,
			min: 0,
			max: 255,
			allowNull: false
		},
		whiteText: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		createdAt: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW
		},
		updatedAt: {
			type: DataTypes.DATE,
			defaultValue: DataTypes.NOW
		}
	};
	return schema;
};