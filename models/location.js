'use strict';
module.exports = (sequelize, DataTypes) => {
  var Location = sequelize.define('Location', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 100],
      },
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1, 500],
        },
      },
  }, {});
  Location.associate = function(models) {
    const {
      City, 
      LocationsCity,
    } = models;
    Location.belongsToMany(City, {through: LocationsCity});
    City.belongsToMany(Location, {through: LocationsCity});
  };
  return Location;
};