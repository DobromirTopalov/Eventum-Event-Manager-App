'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define('Ticket', {
    price: {
      type: DataTypes.FLOAT,
      allowNull: true,
      validate: {
        isFloat: true,
      },
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: true,
      },
    },
  }, {});
  Ticket.associate = (models) => {
    const {
      Event,
    } = models;
    Ticket.belongsTo(Event);
  };

  return Ticket;
};
