'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subcategory = sequelize.define('Subcategory', {
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 100],
      },
    },
  }, {});
  Subcategory.associate = (models) => {
    const {
      Category,
    } = models;

    Subcategory.belongsTo(Category);
  };
  return Subcategory;
};
