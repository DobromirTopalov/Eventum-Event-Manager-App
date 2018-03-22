'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('EventComments', [{
        EventId: 1,
        CommentId: 1, 
      }, {
        EventId: 1,
        CommentId: 2,  
      }, {
        EventId: 2,
        CommentId: 3, 
      }].map( (el) => {
        el.updatedAt =  new Date;
        el.createdAt =  new Date;
        return el;
      }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('EventComments', null, {});
  }
};
