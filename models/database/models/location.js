'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  }, {});

  Location.associate = (models) => {
    const {
      City,
    } = models;

    Location.belongsTo(City);
  };

  return Location;
};
