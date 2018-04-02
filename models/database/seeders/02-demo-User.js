'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username: 'ivan',
      email: 'ivan@abv.bg',
      password: 'ivan123',
      name: 'Ivan Ivanov',
      role: 'Artist',
      UserInfoId: 1,
    }, {
      username: 'maria',
      email: 'maria@abv.bg',
      password: 'maria123',
      name: 'Maria Slavcheva',
      role: 'User',
      UserInfoId: 2,
    }, {
      username: 'georgi',
      email: 'georgi@gmail.com',
      password: 'georgi123',
      name: 'Georgi Georgiev',
      role: 'User',
      UserInfoId: 3,
    }, {
      username: 'maia',
      email: 'maia@gmail.com',
      password: 'maia123',
      name: 'Maia Lecheva',
      role: 'User',
      UserInfoId: 4,
    }, {
      username: 'hristo',
      email: 'hristo@mail.bg',
      password: 'hristo123',
      name: 'Hristo Stoichkov',
      role: 'Artist',
      UserInfoId: 5,
    }, {
      username: 'dobri',
      email: 'dobri@gmail.com',
      password: 'dobri123',
      name: 'Dobri Topalov',
      role: 'Artist',
      UserInfoId: 6,
    }, {
      username: 'stilian',
      email: 'stilian@mail.bg',
      password: 'stilian123',
      name: 'Stilian Martinov',
      role: 'User',
      UserInfoId: 7,
    }, {
      username: 'nia',
      email: 'nia@mail.bg',
      password: 'nia123',
      name: 'Nia Vasileva',
      role: 'Artist',
      UserInfoId: 8,
    }].map((el) => {
      el.updatedAt = new Date;
      el.createdAt = new Date;
      return el;
    }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
