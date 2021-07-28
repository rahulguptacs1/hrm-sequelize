const sequelize = require("../helpers/sequelize");
const { DataTypes } = require("sequelize");
module.exports = function () {
  const Note = sequelize.define("notes", {
    note: DataTypes.TEXT,
    tag: DataTypes.STRING,
  });
  return Note;
};
