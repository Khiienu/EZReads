"use strict";
module.exports = (sequelize, DataTypes) => {
  const System = sequelize.define(
    "System",
    {
      system: DataTypes.STRING,
    },
    {}
  );
  System.associate = function (models) {
    System.belongsTo(models.GamesBySystem, { foreignKey: "systemId" });
    const columnMapping = {
      through: "GamesBySystems",
      otherKey: "gameId",
      foreignKey: "systemId",
    };
    System.belongsToMany(models.Game, columnMapping);
  };
  return System;
};
