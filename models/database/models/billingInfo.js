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
    }, {});

    BillingInfo.associate = (models) => {
        const {
            Country,
            City,
            User,
        } = models;

        BillingInfo.belongsTo(Country);
        BillingInfo.belongsTo(City);
        BillingInfo.belongsTo(User);
    };

    return BillingInfo;
};
