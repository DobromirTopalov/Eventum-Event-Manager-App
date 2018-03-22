'use strict';
module.exports = (sequelize, DataTypes) => {
  var EventCategories = sequelize.define('EventCategories', {}, {});
  EventCategories.associate = function(models) {
    // associations can be defined here
  };
  return EventCategories;
};