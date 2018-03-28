'use strict';
module.exports = (sequelize, DataTypes) => {
    const UserPurches = sequelize.define('UserPurches', {
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    }, {});
    UserPurches.associate = (models) => {
        const {
            User,
            Ticket,
            BillingInfo,
        } = models;

        UserPurches.belongsTo(User);
        UserPurches.belongsTo(Ticket);
        UserPurches.belongsTo(BillingInfo);
    };

    return UserPurches;
};
