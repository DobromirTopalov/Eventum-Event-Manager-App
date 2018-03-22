'use strict';
module.exports = (sequelize, DataTypes) => {
  var UserFollowingArtists = sequelize.define('UserFollowingArtists', {}, {});
  UserFollowingArtists.associate = function(models) {
    
  };
  return UserFollowingArtists;
};