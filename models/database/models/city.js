'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 100],
      },
    },
  }, {});
  City.associate = function(models) {
    const {
      Country,
    } = models;
    City.belongsTo(Country);
  };
  return City;
};
