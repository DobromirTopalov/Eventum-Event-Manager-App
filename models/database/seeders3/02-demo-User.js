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
      role: 'User',
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
    }, {
      username: 'gergana',
      email: 'gergana@amazon.com',
      password: 'gergana123',
      name: 'Gergana Milkova',
      role: 'User',
      UserInfoId: 9,
    }, {
      username: 'gregor',
      email: 'gregor@gmail.com',
      password: 'gregor123',
      name: 'Gregor Wunderstener',
      role: 'User',
      UserInfoId: 10,
    }, {
      username: 'claudia',
      email: 'claudia@gmail.com',
      password: 'claudia123',
      name: 'Claudia Wagner',
      role: 'User',
      UserInfoId: 11,
    }, {
      username: 'lucho',
      email: 'lucho@yahooo.com',
      password: 'lucho123',
      name: 'Luchezar Todorov',
      role: 'Artist',
      UserInfoId: 12,
    }, {
      username: 'yavor',
      email: 'yavor@hotmail.com',
      password: 'yavor123',
      name: 'Yavor Stoichev',
      role: 'Artist',
      UserInfoId: 13,
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
