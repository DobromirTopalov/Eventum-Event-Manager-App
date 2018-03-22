'use strict';
module.exports = (sequelize, DataTypes) => {
  var Artist = sequelize.define('Artist', {
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
    city: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 100],
      },
    },
    job_possition: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [1, 100],
      },
    },
  }, {});
  Artist.associate = function(models) {
    
  };
  return Artist;
};