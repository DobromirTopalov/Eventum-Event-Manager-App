'use strict';
module.exports = (sequelize, DataTypes) => {
  var City = sequelize.define('City', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 100],
      },
    }
  }, {});
  City.associate = function(models) {
    const {
      Country, 
      CitiesCountry,
    } = models;
    City.belongsToMany(Country, {through: CitiesCountry});
    Country.belongsToMany(City, {through: CitiesCountry});
  };
  return City;
};