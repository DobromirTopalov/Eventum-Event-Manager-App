'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [{
        LocationId: 2,
        coverPhoto: 'google.com',
        date: '2018-02-05 20:00:00', 
      }, {
        LocationId: 1,
        coverPhoto: 'google.com',
        date: '2018-05-05 22:30:00', 
      }, {
        LocationId: 3,
        coverPhoto: 'google.com',
        date: '2018-11-25 21:00:00',
      }].map( (el) => {
        el.updatedAt =  new Date;
        el.createdAt =  new Date;
        return el;
      }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  }
};
