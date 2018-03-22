'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Artists', [{
        username: 'petur_32',
        email: 'petur@gmail.com',
        password: 'peshka22',
        name: 'Petur Petev Petrov',
        city: 'Varna',
        job_possition: 'Musician',
      }, {
        username: 'Nadia',
        email: 'nady@gmail.com',
        password: 'todorova123',
        name: 'Nadia Ivanova Todorova',
        city: 'Sofia',
        job_possition: 'Designer',
      }, {
        username: 'Valer221',
        email: 'valeri@gmail.com',
        password: 'justdance2',
        name: 'Valeri Martinov Petrov',
        city: 'Plovdiv',
        job_possition: 'Dance instructor',
      }].map( (el) => {
        el.updatedAt =  new Date;
        el.createdAt =  new Date;
        return el;
      }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Artists', null, {});
  }
};
