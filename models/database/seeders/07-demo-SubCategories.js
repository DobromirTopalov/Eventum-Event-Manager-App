'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Subcategories', [{
      title: 'Popping',
      CategoryId: 1,
    }, {
      title: 'Tango',
      CategoryId: 1,
    }, {
      title: 'Rap',
      CategoryId: 2,
    }, {
      title: 'Techno',
      CategoryId: 2,
    }, {
      title: 'Baroque',
      CategoryId: 3,
    }, {
      title: 'Modern Art',
      CategoryId: 3,
    }, {
      title: 'Indian',
      CategoryId: 4,
    }, {
      title: 'Chinese',
      CategoryId: 4,
    }].map((el) => {
      el.updatedAt = new Date;
      el.createdAt = new Date;
      return el;
    }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Subcategories', null, {});
  },
};
