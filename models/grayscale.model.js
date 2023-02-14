module.exports = function(sequelize, DataTypes) {
	var path = require("path");
	var schema = require(path.join(__dirname, "commonSchema.js"))(DataTypes);
	var grayscale1 = sequelize.define("grayscaleOne", schema, { freezeTableName: true });
	return grayscale1;
};