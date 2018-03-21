'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Locations', [{
        name: 'Wembley Stadium', 
        address: 'London HA9 0WS, UK',
      },
      {
        name: 'Mercedes-Benz Arena', 
        address: 'Mercedes-Platz 1, 10243 Berlin, Germany',
      }, 
      ]
      .map( (el) => {
        el.updatedAt =  new Date;
        el.createdAt =  new Date;
        return el
      }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Locations', null, {});
  }
};