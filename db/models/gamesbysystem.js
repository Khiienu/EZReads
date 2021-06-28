"use strict";
module.exports = (sequelize, DataTypes) => {
  const GamesBySystem = sequelize.define(
    "GamesBySystem",
    {
      gameId: DataTypes.INTEGER,
      systemId: DataTypes.INTEGER,
    },
    {}
  );
  GamesBySystem.associate = function (models) {};
  return GamesBySystem;
};
