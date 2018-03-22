'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('TicketTypeTickets', [{
        TicketId: 1,
        TypeTicketId: 1,
      }, {
        TicketId: 2,
        TypeTicketId: 2, 
      }, {
        TicketId: 3,
        TypeTicketId: 2,
      }].map( (el) => {
        el.updatedAt =  new Date;
        el.createdAt =  new Date;
        return el;
      }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('TicketTypeTickets', null, {});
  }
};
