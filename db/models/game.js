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
    Game.belongsTo(models.GameShelve, { foreignKey: "gameId" });
    const columnMapping = {
      through: "GamesBySystems",
      otherKey: "systemId",
      foreignKey: "gameId",
    };
    Game.belongsToMany(models.System, columnMapping);
  };
  return Game;
};
