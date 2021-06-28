"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("GamesBySystems", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      gameId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Games" },
      },
      systemId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Systems" },
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
    return queryInterface.dropTable("gamesBySystems");
  },
};
