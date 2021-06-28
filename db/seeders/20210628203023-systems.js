'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('People', [{ system: `PC`},
      { system: `PS5`},
      { system: `PS4`},
      { system: `PS3`},
      { system: `PS2`},
      { system: `PS1`},
      { system: `Xbox Series`},
      { system: `Xbox One`},
      { system: `Xbox 360`},
      { system: `Xbox`},
      { system: `Switch`},
      { system: `WiiU`},
      { system: `Wii`},
      { system: `Gamecube`},
      { system: `N64`},
      { system: `SNES`},
      { system: `NES`},
      { system: `Genesis`},
      { system: `Sega Saturn`},
      { system: `Dreamcast`},
      { system: `DS`},
      { system: `PSP`}], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
