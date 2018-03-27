'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1, 30],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 30],
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isAlpha: true,
      },
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {});
  User.associate = function(models) {
    const {
      Artist,
      UserFollowingArtists,
      TicketUsers,
      Ticket,
      UserInfo,
    } = models;

    User.belongsTo(UserInfo);
    // User.belongsToMany(Artist, { through: 'UserFollowingArtists' });
    // Artist.belongsToMany(User, { through: 'UserFollowingArtists' });
    // User.belongsToMany(Ticket, { through: TicketUsers });
    // Ticket.belongsToMany(User, { through: TicketUsers });
  };
  return User;
};
