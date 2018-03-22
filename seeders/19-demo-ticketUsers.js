'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TicketUsers', [{
        TicketId: 1,
        UserId: 1,
      }, {
        TicketId: 2,
        UserId: 2, 
      }, {
        TicketId: 3,
        UserId: 3,
      }].map( (el) => {
        el.updatedAt =  new Date;
        el.createdAt =  new Date;
        return el;
      }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TicketUsers', null, {});
  }
};
