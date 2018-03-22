'use strict';
module.exports = (sequelize, DataTypes) => {
  var EventArtists = sequelize.define('EventArtists', {}, {});
  EventArtists.associate = function(models) {
    
  };
  return EventArtists;
};