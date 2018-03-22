'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [{
        name: 'Dances',
        createdAt: new Date,
        updatedAt: new Date,
      }, {
        name: 'Music',
        createdAt: new Date,
        updatedAt: new Date,
      }, {
        name: 'Art',
        createdAt: new Date,
        updatedAt: new Date,
      }, {
        name: 'Culture',
        createdAt: new Date,
        updatedAt: new Date,
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
