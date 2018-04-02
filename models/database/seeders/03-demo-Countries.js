'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Countries', [{
      name: 'Bulgaria',
      }, {
        name: 'Israel',
      }, {
        name: 'Germany',
      }, {
        name: 'USA',
      }, {
        name: 'Russia',
      }, {
        name: 'Denmark',
      }, {
        name: 'Chile',
      }, {
        name: 'Malta',
      }].map( (el) => {
        el.updatedAt = new Date;
        el.createdAt = new Date;
        return el;
      }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Countries', null, {});
  },
};
