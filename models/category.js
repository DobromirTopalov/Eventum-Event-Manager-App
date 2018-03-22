'use strict';
module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 100],
      },
    }
  }, {});
  Category.associate = function(models) {
    const {
      Subcategory, 
    } = models;
    Category.belongsToMany(Subcategory, {through: 'CategorySubcategories'});
    Subcategory.belongsToMany(Category, {through: 'CategorySubcategories'});
  };
  return Category;
};