'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CategorySubcategories', [{
        CategoryId: 1,
        SubcategoryId: 1,
      }, {
        CategoryId: 1,
        SubcategoryId: 2,
      }, {
        CategoryId: 2,
        SubcategoryId: 3,
      }, {
        CategoryId: 2,
        SubcategoryId: 4,
      }, {
        CategoryId: 3,
        SubcategoryId: 5,
      }, {
        CategoryId: 3,
        SubcategoryId: 6,
      }, {
        CategoryId: 4,
        SubcategoryId: 7,
      }, {
        CategoryId: 4,
        SubcategoryId: 8,
      }].map( (el) => {
        el.updatedAt =  new Date;
        el.createdAt =  new Date;
        return el;
      }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CategorySubcategories', null, {});
  }
};
