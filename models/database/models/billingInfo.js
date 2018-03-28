'use strict';
module.exports = (sequelize, DataTypes) => {
    const BillingInfo = sequelize.define('BillingInfo', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        capacity: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {});

    BillingInfo.associate = (models) => {
        const {
            Country,
            City,
        } = models;

        BillingInfo.belongsTo(Country);
        BillingInfo.belongsTo(City);
    };

    return BillingInfo;
};
