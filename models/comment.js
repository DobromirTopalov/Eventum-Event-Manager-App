'use strict';
module.exports = (sequelize, DataTypes) => {
  var Comment = sequelize.define('Comment', {
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    const {
      User,
    } = models;
    Comment.belongsTo(User);
  };
  return Comment;
};