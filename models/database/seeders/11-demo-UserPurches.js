'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserInfos', [{
        quantity: 2,
        UserId: 1,
        TicketId: 1,
        BillingInfoId: 1,
      }, {
        quantity: 1,
        UserId: 2,
        TicketId: 2,
        BillingInfoId: 2,
      }].map( (el) => {
        el.updatedAt = new Date;
        el.createdAt = new Date;
        return el;
      }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserInfos', null, {});
  },
};
