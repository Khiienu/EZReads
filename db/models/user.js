"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      fullName: DataTypes.STRING,
      email: DataTypes.STRING,
      hashedPassword: DataTypes.STRING,
    },
    {}
  );
  User.associate = function (models) {
    User.hasMany(models.Review, { foreignKey: "usersId" });
    User.hasMany(models.GameShelve, { foreignKey: "usersId" });
  };
  return User;
};
