'use strict';
module.exports = (sequelize, DataTypes) => {
  var Ticket = sequelize.define('Ticket', {
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
  Ticket.associate = function(models) {
    const {
      TypeTicket, 
      TicketTypeTicket,
    } = models;
    Ticket.belongsToMany(TypeTicket, {through: 'TicketTypeTicket'});
    TypeTicket.belongsToMany(Ticket, {through: 'TicketTypeTicket'});
  };
  return Ticket;
};