'use strict';
module.exports = (sequelize, DataTypes) => {
  var LocationsCity = sequelize.define('LocationsCity', {}, {});
  LocationsCity.associate = function(models) {
    
  };
  return LocationsCity;
};