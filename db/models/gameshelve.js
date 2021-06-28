"use strict";
module.exports = (sequelize, DataTypes) => {
  const GameShelve = sequelize.define(
    "GameShelve",
    {
      usersId: DataTypes.INTEGER,
      gameId: DataTypes.INTEGER,
      status: DataTypes.STRING,
    },
    {}
  );
  GameShelve.associate = function (models) {
    GameShelve.belongsTo(models.Game, { foreignKey: "gameId" });
    GameShelve.belongsTo(models.User, { foreignKey: "usersId" });
  };
  return GameShelve;
};
