'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('LocationsCity', [{
        LocationId: 1,
        CityId: 1,
      },{
        LocationId: 2,
        CityId: 2,
      },
      {
        LocationId: 3,
        CityId: 1,
      }, 
      ]
      .map( (el) => {
        el.updatedAt =  new Date;
        el.createdAt =  new Date;
        return el
      }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('LocationsCity', null, {});
  }
};