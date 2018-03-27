'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        username: 'yavorss',
        email: 'qs277@abv.bg',
        password: '123123',
        name: 'Yavor Stoychev',
        role: 'Artist',
        UserInfoId: 1,
      }, {
        username: 'yavor',
        email: 'qs288@abv.bg',
        password: '123123',
        name: 'Yavor Slavchev',
        role: 'User',
        UserInfoId: 2, 
      }, ].map( (el) => {
        el.updatedAt =  new Date;
        el.createdAt =  new Date;
        return el;
      }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
