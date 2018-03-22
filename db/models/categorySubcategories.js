'use strict';
module.exports = (sequelize, DataTypes) => {
  var CategorySubcategories = sequelize.define('CategorySubcategories', {}, {});
  CategorySubcategories.associate = function(models) {
    
  };
  return CategorySubcategories;
};