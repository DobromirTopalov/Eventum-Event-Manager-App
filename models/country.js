'use strict';
module.exports = (sequelize, DataTypes) => {
  var Country = sequelize.define('Country', {
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 100],
      },
    }
  }, {});
  Country.associate = function(models) {
    // associations can be defined here
  };
  return Country;
};