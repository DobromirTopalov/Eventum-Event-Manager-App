'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        username: 'ivanow_32',
        email: 'e.ivanov@gmail.com',
        password: '123Ivan',
        name: 'Ivan Ivanov Kostadinov',
        city: 'Sofia',
      }, {
        username: 'mariq22',
        email: 'mara@gmail.com',
        password: '0889032123',
        name: 'Maria Miteva Ivanova',
        city: 'Sofia',
      }, {
        username: 'Gesha32',
        email: 'g_georgi@gmail.com',
        password: 'Goshu9',
        name: 'Georgi Georgiev Grigorov',
        city: 'Varna',
      }].map( (el) => {
        el.updatedAt =  new Date;
        el.createdAt =  new Date;
        return el;
      }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
