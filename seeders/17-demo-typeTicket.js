'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TypeTickets', [{
        type: 'vip',
      }, {
        type: 'regular',
      }, {
        type: 'child',
      }, {
        type: 'adult',
      }].map( (el) => {
        el.updatedAt =  new Date;
        el.createdAt =  new Date;
        return el;
      }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TypeTickets', null, {});
  }
};
