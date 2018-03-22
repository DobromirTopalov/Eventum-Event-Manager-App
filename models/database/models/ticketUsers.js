'use strict';
module.exports = (sequelize, DataTypes) => {
  var TicketUsers = sequelize.define('TicketUsers', {
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true,      
    },
  }, {});
  TicketUsers.associate = function(models) {
    
  };
  return TicketUsers;
};  