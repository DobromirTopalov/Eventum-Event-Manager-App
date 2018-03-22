'use strict';
module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define('Event', {
    date: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        isDate: true,
      },
    },
    coverPhoto: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isUrl: true,
        }
    }
  }, {});

  Event.associate = function(models) {
    const {
      Location,
    } = models;
    Event.belongsTo(Location);
  };
  return Event;
};