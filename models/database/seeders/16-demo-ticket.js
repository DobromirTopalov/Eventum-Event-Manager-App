'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tickets', [{
        price: 20.99,
        capacity: 200,
      }, {
        price: 10.99,
        capacity: 200,
      }, {
        price: 15.99,
        capacity: 200,
      }].map( (el) => {
        el.updatedAt =  new Date;
        el.createdAt =  new Date;
        return el;
      }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tickets', null, {});
  }
};
