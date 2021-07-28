const sequelize = require("../helpers/sequelize");
const { DataTypes } = require("sequelize");
module.exports = function () {
  const Position = sequelize.define("positions", {
    positionId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    positionName: DataTypes.STRING(50),
  });
  return Position;
};
