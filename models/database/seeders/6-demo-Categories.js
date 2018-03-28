'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [{
      name: 'Dances',
      SubcategoryId: 1,
    }, {
      name: 'Music',
      SubcategoryId: 3,
    }, {
      name: 'Art',
      SubcategoryId: 5,
    }, {
      name: 'Culture',
      SubcategoryId: 8,
    }].map((el) => {
      el.updatedAt = new Date;
      el.createdAt = new Date;
      return el;
    }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  },
};
