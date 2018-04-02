'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserPurches', [{
        quantity: 3,
        UserId: 1,
        TicketId: 1,
        BillingInfoId: 1,
      }, {
        quantity: 2,
        UserId: 1,
        TicketId: 2,
        BillingInfoId: 2,
      }, {
        quantity: 1,
        UserId: 3,
        TicketId: 2,
        BillingInfoId: 3,
      }, {
        quantity: 2,
        UserId: 3,
        TicketId: 3,
        BillingInfoId: 4,
      }, {
        quantity: 3,
        UserId: 6,
        TicketId: 4,
        BillingInfoId: 5,
      }, {
        quantity: 1,
        UserId: 6,
        TicketId: 1,
        BillingInfoId: 6,
      }].map( (el) => {
        el.updatedAt = new Date;
        el.createdAt = new Date;
        return el;
      }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserPurches', null, {});
  },
};
