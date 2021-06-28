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
  };
  return System;
};
