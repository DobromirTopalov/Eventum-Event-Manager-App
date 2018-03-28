'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserInfos', [{
        address: 'Sofia Oborishte 18',
        avatar: 'https://avatars1.githubusercontent.com/u/1265470?s=40&v=4',
        coverPhoto: 'https://avatars1.githubusercontent.com/u/1265470?s=40&v=4',
        website: 'superhero.com',
        biography: 'I\'m superhero Donch ',
      }, {
        address: 'Sofia Oborishte 16',
        avatar: 'https://avatars1.githubusercontent.com/u/1265470?s=40&v=4',
        coverPhoto: 'https://avatars1.githubusercontent.com/u/1265470?s=40&v=4',
        website: 'superhero.bg',
        biography: 'I\'m superhero DonchBg ',
      }].map( (el) => {
        el.updatedAt = new Date;
        el.createdAt = new Date;
        return el;
      }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserInfos', null, {});
  },
};
