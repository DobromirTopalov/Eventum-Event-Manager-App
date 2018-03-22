'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [{
        LocationId: 2,
        coverPhoto: 'google.com',
        date: '2018-02-05 20:00:00',
        // CategoryId: 2,
        ArtistId: 1,
      }, {
        LocationId: 1,
        coverPhoto: 'google.com',
        date: '2018-05-05 22:30:00', 
        // CategoryId: 2,
        DescriptionId: 1,
      }, {
        LocationId: 3,
        coverPhoto: 'google.com',
        date: '2018-11-25 21:00:00',
        // CategoryId: 1,
        DescriptionId: 1,
        ArtistId: 2,

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
