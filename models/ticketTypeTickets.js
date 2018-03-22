'use strict';
module.exports = (sequelize, DataTypes) => {
  var TicketTypeTicket = sequelize.define('TicketTypeTicket', {}, {});
  TicketTypeTicket.associate = function(models) {
    
  };
  return TicketTypeTicket;
};