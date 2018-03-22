'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('EventArtists', [{
        EventId: 1,
        ArtistId: 1,
      }, {
        EventId: 1,
        ArtistId: 2, 
      }, {
        EventId: 2,
        ArtistId: 3,
      }].map( (el) => {
        el.updatedAt =  new Date;
        el.createdAt =  new Date;
        return el;
      }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('EventArtists', null, {});
  }
};
