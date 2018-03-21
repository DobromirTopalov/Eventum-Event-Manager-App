'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Locations', [{
        name: 'Wembley Stadium', 
        address: 'London HA9 0WS, UK',
        createdAt: new Date,
        updatedAt: new Date,
      }, 
      {
        name: 'Mercedes-Benz Arena', 
        address: 'Mercedes-Platz 1, 10243 Berlin, Germany',
        createdAt: new Date,
        updatedAt: new Date,
    }, 
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Locations', null, {});
  }
};