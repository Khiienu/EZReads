"use strict";
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      usersId: DataTypes.INTEGER,
      gameId: DataTypes.INTEGER,
      content: DataTypes.TEXT,
      score: DataTypes.NUMERIC,
    },
    {}
  );
  Review.associate = function (models) {
    Review.belongsTo(models.Game, { foreignKey: "gameId" });
    Review.belongsTo(models.User, { foreignKey: "usersId" });
  };
  return Review;
};
