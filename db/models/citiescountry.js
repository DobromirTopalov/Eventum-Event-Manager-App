'use strict';
module.exports = (sequelize, DataTypes) => {
  var CitiesCountry = sequelize.define('CitiesCountry', {}, {});
  CitiesCountry.associate = function(models) {
  };
  return CitiesCountry;
};