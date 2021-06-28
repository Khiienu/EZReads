"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Games", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      primaryGenre: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      gameTitle: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      picture: {
        type: Sequelize.STRING(255),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now")
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now")
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Games");
  },
};
