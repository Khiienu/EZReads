"use strict";
module.exports = (sequelize, DataTypes) => {
  const Game = sequelize.define(
    "Game",
    {
      primaryGenre: DataTypes.STRING,
      gameTitle: DataTypes.STRING,
      description: DataTypes.TEXT,
      picture: DataTypes.STRING,
    },
    {}
  );
  Game.associate = function (models) {
    Game.belongsTo(models.gameShelve, { foreignKey: "gameId" });
  };
  return Game;
};
