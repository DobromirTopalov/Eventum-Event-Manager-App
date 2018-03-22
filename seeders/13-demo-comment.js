'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [{
        UserId: 2,
        content: `We've had a really good time at the event.PERFECT!`,
      }, {
        UserId: 1,
        content: `Nice organization!I am so so happy!`,
      }, {
        UserId: 2,
        content: `We've had a really good time at the event.PERFECT!`,
      }].map( (el) => {
        el.updatedAt =  new Date;
        el.createdAt =  new Date;
        return el;
      }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
