'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Descriptions', [{
        title: 'Dance party',
        content: 'Party hard under the night sky in Sofia, no rules, bring all your buddies to show your style!',
        createdAt: new Date,
        updatedAt: new Date,
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Descriptions', null, {});
  }
};
