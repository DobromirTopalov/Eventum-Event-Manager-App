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
      Subcategories, 
      CategorySubcategories,
    } = models;
    Category.belongsToMany(Subcategories, {through: CategorySubcategories});
    Subcategories.belongsToMany(Category, {through: CategorySubcategories});
  };
  return Category;
};