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
    UserInfo.associate = (models) => {

    };

    return UserInfo;
};
