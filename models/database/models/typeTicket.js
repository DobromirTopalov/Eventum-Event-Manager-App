'use strict';
module.exports = (sequelize, DataTypes) => {
  var TypeTicket = sequelize.define('TypeTicket', {
    type: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 100],
      },
    }
  }, {});
  TypeTicket.associate = function(models) {
    
  };
  return TypeTicket;
};