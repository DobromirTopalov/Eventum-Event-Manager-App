'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tickets', [{
        price: 20.00,
        capacity: 100,
        EventId: 2,
      }, {
        price: 10.00,
        capacity: 50,
        EventId: 1,
      }, {
        price: 25.00,
        capacity: 120,
        EventId: 2,
      }, {
        price: 15.00,
        capacity: 60,
        EventId: 1,
      }].map( (el) => {
        el.updatedAt = new Date;
        el.createdAt = new Date;
        return el;
      }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tickets', null, {});
  },
};
