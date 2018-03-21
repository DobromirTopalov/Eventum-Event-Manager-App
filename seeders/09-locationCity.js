'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // return queryInterface.bulkInsert('LocationsCities', [{
    //     LocationId: 2,
    //     CityId: 5,
    //   }, 
    //   ]
    //   .map( (el) => {
    //     el.updatedAt =  new Date;
    //     el.createdAt =  new Date;
    //     return el
    //   }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('LocationsCities', null, {});
  }
};