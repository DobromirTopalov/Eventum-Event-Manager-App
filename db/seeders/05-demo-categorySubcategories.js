'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CategorySubcategories', [{
        CategoryId: 1,
        SubcategoryId: 1, 
        createdAt: new Date,
        updatedAt: new Date,
      }, {
        CategoryId: 1,
        SubcategoryId: 2,
        createdAt: new Date,
        updatedAt: new Date, 
      }, {
        CategoryId: 2,
        SubcategoryId: 3,
        createdAt: new Date,
        updatedAt: new Date, 
      }, {
        CategoryId: 2,
        SubcategoryId: 4,
        createdAt: new Date,
        updatedAt: new Date, 
      }, {
        CategoryId: 3,
        SubcategoryId: 5,
        createdAt: new Date,
        updatedAt: new Date, 
      }, {
        CategoryId: 3,
        SubcategoryId: 6,
        createdAt: new Date,
        updatedAt: new Date, 
      }, {
        CategoryId: 4,
        SubcategoryId: 7,
        createdAt: new Date,
        updatedAt: new Date, 
      }, {
        CategoryId: 4,
        SubcategoryId: 8,
        createdAt: new Date,
        updatedAt: new Date, 
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CategorySubcategories', null, {});
  }
};
