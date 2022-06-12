const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Issues extends Model {}

Issues.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    modelName: "issues",
  }
);

module.exports = Issues;
