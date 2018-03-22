'use strict';
module.exports = (sequelize, DataTypes) => {
  var Event = sequelize.define('Event', {
    date: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        isDate: true,
      },
    },
    coverPhoto: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isUrl: true,
      },
    },
  }, {});

  Event.associate = function(models) {
    const {
      Location,
      Comment,
      Artist,
      Description,
      Category,
    } = models;
    Event.belongsTo(Location);
    Event.belongsTo(Description);
    Event.belongsTo(Category);
    Event.belongsTo(Artist);

    Event.belongsToMany(Artist, {through: 'EventArtists'});
    Artist.belongsToMany(Event, {through: 'EventArtists'});

    Event.belongsToMany(Comment, {through: 'EventComments'});
    Comment.belongsToMany(Event, {through: 'EventComments'});
  };
  return Event;
};
