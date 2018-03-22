'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Descriptions', [{
        title: 'Dance party',
        content: 'Party hard under the night sky in Sofia, no rules, bring all your buddies to show your style!',
      }].map( (el) => {
        el.updatedAt =  new Date;
        el.createdAt =  new Date;
        return el;
      }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Descriptions', null, {});
  }
};
