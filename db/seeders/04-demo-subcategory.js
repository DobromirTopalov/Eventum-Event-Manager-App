'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Subcategories', [{
        title: 'Popping',
      }, {
        title: 'Tango',
      }, {
        title: 'Rap',
      }, {
        title: 'Techno',
      }, {
        title: 'Baroque',
      }, {
        title: 'Modern Art',
      }, {
        title: 'Indian',
      }, {
        title: 'Chinese',
      }].map( (el) => {
        el.updatedAt =  new Date;
        el.createdAt =  new Date;
        return el;
      }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subcategories', null, {});
  }
};
