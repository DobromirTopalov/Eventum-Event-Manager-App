'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tickets', [{
      price: 20.00,
      capacity: 100,
      EventId: 1,
    }, {
      price: 10.00,
      capacity: 200,
      EventId: 2,
    }, {
      price: 25.00,
      capacity: 80,
      EventId: 3,
    }, {
      price: 15.00,
      capacity: 40,
      EventId: 4,
    }, {
      price: 15.00,
      capacity: 180,
      EventId: 5,
    }, {
      price: 25.00,
      capacity: 100,
      EventId: 6,
    }].map((el) => {
      el.updatedAt = new Date;
      el.createdAt = new Date;
      return el;
    }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tickets', null, {});
  },
};
