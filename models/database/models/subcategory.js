'use strict';
module.exports = (sequelize, DataTypes) => {
  var Subcategory = sequelize.define('Subcategory', {
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 100],
      },
    }
  }, {});
  Subcategory.associate = function(models) {
    
  };
  return Subcategory;
};