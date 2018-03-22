'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserFollowingArtists', [{
        UserId: 1,
        ArtistId: 1,
      }, {
        UserId: 1,
        ArtistId: 2,
      }, {
        UserId: 2,
        ArtistId: 1,
      }, {
        UserId: 2,
        ArtistId: 3,
      }, {
        UserId: 3,
        ArtistId: 1,
      }, {
        UserId: 3,
        ArtistId: 2,
      }].map( (el) => {
        el.updatedAt =  new Date;
        el.createdAt =  new Date;
        return el;
      }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserFollowingArtists', null, {});
  }
};
