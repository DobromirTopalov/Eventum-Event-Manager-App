'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    describe: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    creator: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    capacity: {
      type: DataTypes.INTEGER,
    },
    coverPhoto: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true,
      },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        isDate: true,
      },
    },
  }, {});

  Event.associate = (models) => {
    const {
      Location,
      Category,
      User,
      Subcategory,
    } = models;

    Event.belongsTo(Location);
    Event.belongsTo(User);
    Event.belongsTo(Category);
    Event.belongsTo(Subcategory);
  };
  return Event;
};
