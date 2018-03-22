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
      Description,
      Comment,
      Category,
      Artist,
    } = models;
    Event.belongsTo(Location);
    Event.belongsTo(Description);

    Event.belongsToMany(Category, {through: 'EventCategories'});
    Category.belongsToMany(Event, {through: 'EventCategories'});

    Event.belongsTo(Artist);

    Event.belongsToMany(Artist, {through: 'EventArtists'});
    Artist.belongsToMany(Event, {through: 'EventArtists'});

    Event.belongsToMany(Comment, {through: 'EventComments'});
    Comment.belongsToMany(Event, {through: 'EventComments'});
  };
  return Event;
};
