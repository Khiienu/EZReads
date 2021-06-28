'use strict';
module.exports = (sequelize, DataTypes) => {
  const GameShelve = sequelize.define('GameShelve', {
    usersId: DataTypes.INTEGER,
    gameId: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  GameShelve.associate = function(models) {
    // associations can be defined here
  };
  return GameShelve;
};