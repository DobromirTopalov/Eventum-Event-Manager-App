'use strict';
module.exports = (sequelize, DataTypes) => {
  var EventComments = sequelize.define('EventComments', {}, {});
  EventComments.associate = function(models) {
    
  };
  return EventComments;
};