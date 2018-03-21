'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Subcategories', [{
        title: 'Popping',
        createdAt: new Date,
        updatedAt: new Date,
      }, {
        title: 'Tango',
        createdAt: new Date,
        updatedAt: new Date,
      }, {
        title: 'Rap',
        createdAt: new Date,
        updatedAt: new Date,
      }, {
        title: 'Techno',
        createdAt: new Date,
        updatedAt: new Date,
      }, {
        title: 'Baroque',
        createdAt: new Date,
        updatedAt: new Date,
      }, {
        title: 'Modern Art',
        createdAt: new Date,
        updatedAt: new Date,
      }, {
        title: 'Indian',
        createdAt: new Date,
        updatedAt: new Date,
      }, {
        title: 'Chinese',
        createdAt: new Date,
        updatedAt: new Date,
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subcategories', null, {});
  }
};
