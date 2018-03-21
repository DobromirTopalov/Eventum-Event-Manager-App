'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Locations', [{
        name: 'London', 
        createdAt: new Date,
        updatedAt: new Date,
      }, 
      {
        name: 'Berlin', 
        createdAt: new Date,
        updatedAt: new Date,
    }, 
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Locations', null, {});
  }
};