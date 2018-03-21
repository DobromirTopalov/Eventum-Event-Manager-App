'use strict';
module.exports = (sequelize, DataTypes) => {
  var Description = sequelize.define('Description', {
    title: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 200],
      },
    content: {
        type: DataTypes.TEXT,
        allowNull: true,
      }
    }
  }, {});
  Description.associate = function(models) {
    
  };
  return Description;
};