'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [{
      name: 'Dances',
    }, {
      name: 'Music',
    }, {
      name: 'Art',
    }, {
      name: 'Culture',
    }, {
      name: 'Sport',
    }, {
      name: 'Technology',
    }, {
      name: 'Folklore',
    }, {
      name: 'Game',
    }, {
      name: 'Education',
    }, {
      name: 'Science',
    }, {
      name: 'Agriculture & Botanics',
    }, {
      name: 'Craftsmanship',
    }, {
      name: 'Fashion',
    }, {
      name: 'Party',
    }].map((el) => {
      el.updatedAt = new Date;
      el.createdAt = new Date;
      return el;
    }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  },
};
