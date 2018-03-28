'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [{
      name: 'Dances',
      SubcategoryId: 1,
    }, {
      name: 'Music',
      SubcategoryId: 2,
    }, {
      name: 'Art',
    }, {
      name: 'Culture',
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
