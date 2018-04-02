'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('UserInfos', [{
        address: 'Sofia Oborishte 18',
        avatar: 'speaker1.jpg',
        coverPhoto: 'i-need-a-cover-facebook-cover.jpg',
        website: 'https://ivan.com/',
        biography: 'I\'m an artist, Ivan!',
      }, {
        address: 'Sofia Lulin 06',
        avatar: 'usr_avatar.png',
        coverPhoto: 'i-need-a-cover-facebook-cover.jpg',
        website: 'https://maria.com/',
        biography: 'I\'m an user, Maria!',
      }, {
        address: 'Sofia Mladost 87',
        avatar: 'usr_avatar.png',
        coverPhoto: 'i-need-a-cover-facebook-cover.jpg',
        website: 'https://georgi.com/',
        biography: 'I\'m an user, Georgi!',
      }, {
        address: 'Varna Nadejda 14',
        avatar: 'usr_avatar.png',
        coverPhoto: 'i-need-a-cover-facebook-cover.jpg',
        website: 'https://maia.com/',
        biography: 'I\'m an user, Maia!',
      }, {
        address: 'Varna Lulin 46',
        avatar: 'speaker3.jpg',
        coverPhoto: 'i-need-a-cover-facebook-cover.jpg',
        website: 'https://hristo.com/',
        biography: 'I\'m an artist, Hristo!',
      }, {
        address: 'Paris 29 Place de la Madeleine',
        avatar: 'usr_avatar.png',
        coverPhoto: 'i-need-a-cover-facebook-cover.jpg',
        website: 'https://dobri.com/',
        biography: 'I\'m an artist, Dobri!',
      }, {
        address: 'Paris 64 Faubourg Saint Honoré',
        avatar: 'usr_avatar.png',
        coverPhoto: 'i-need-a-cover-facebook-cover.jpg',
        website: 'https://stilian.com/',
        biography: 'I\'m an user, Stilian!',
      }, {
        address: 'Nantes 96 rue La Boétie',
        avatar: 'nia.png',
        coverPhoto: 'i-need-a-cover-facebook-cover.jpg',
        website: 'https://nia.com/',
        biography: 'I\'m an artist, Nia!',
      }, {
        address: 'Nantes 44 rue La Boétie',
        avatar: 'usr_avatar.png',
        coverPhoto: 'i-need-a-cover-facebook-cover.jpg',
        website: 'https://gergana.com/',
        biography: 'I\'m an user, Gergana!',
      }, {
        address: 'Berlin Platz strasse 804',
        avatar: 'usr_avatar.png',
        coverPhoto: 'i-need-a-cover-facebook-cover.jpg',
        website: 'https://gregor.com/',
        biography: 'I\'m an user, Gregor!',
      }, {
        address: 'Berlin Platz strasse 944',
        avatar: 'usr_avatar.png',
        coverPhoto: 'i-need-a-cover-facebook-cover.jpg',
        website: 'https://claudia.com/',
        biography: 'I\'m an user, Claudia!',
      }, {
        address: 'London Down Town street 023',
        avatar: 'speaker4.jpg',
        coverPhoto: 'i-need-a-cover-facebook-cover.jpg',
        website: 'https://lucho.com/',
        biography: 'I\'m an artist, Lucho!',
      }, {
        address: 'Bayern strasse 69',
        avatar: 'test1.png',
        coverPhoto: 'i-need-a-cover-facebook-cover.jpg',
        website: 'https://yavor.com/',
        biography: 'I\'m an artist, Yavor!',
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
