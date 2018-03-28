'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 100],
      },
    },
  }, {});
  Category.associate = function(models) {
    const {
      Subcategory,
    } = models;

    Category.hasMany(Subcategory);
  };
  return Category;
};
