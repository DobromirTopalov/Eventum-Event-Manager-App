'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserInfo = sequelize.define('UserInfo', {
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    avatar: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    coverPhoto: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    website: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    biography: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
  }, {});
  UserInfo.associate = function(models) {
    const {
      Artist,
      UserFollowingArtists,
      TicketUsers,
      Ticket,
      User,
    } = models;

    UserInfo.hasOne(User);
    // User.belongsToMany(Artist, { through: 'UserFollowingArtists' });
    // Artist.belongsToMany(User, { through: 'UserFollowingArtists' });
    // User.belongsToMany(Ticket, { through: TicketUsers });
    // Ticket.belongsToMany(User, { through: TicketUsers });
  };
  return UserInfo;
};
