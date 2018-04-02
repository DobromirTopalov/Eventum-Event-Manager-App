'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('BillingInfos', [{
      firstName: 'Mike',
      lastName: 'Lebron',
      email: 'mikelebron@gmail.com',
      address: '52 Sunnyslope Street',
      postCode: '1111',
      CityId: 1,
      CountryId: 1,
      UserId: 1,
    }, {
      firstName: 'Mira',
      lastName: 'Vasileva',
      email: 'mira@mail.com',
      address: '75 Lees Creek Street',
      postCode: '2222',
      CityId: 2,
      CountryId: 2,
      UserId: 1,
    }, {
      firstName: 'Nasko',
      lastName: 'Mitev',
      email: 'mitew@mail.com',
      address: '48 Pawnee Lane',
      postCode: '3333',
      CityId: 3,
      CountryId: 3,
      UserId: 3,
    }, {
      firstName: 'Mirela',
      lastName: 'Gogova',
      email: 'mirela@mailbox.bg',
      address: '75 Lees Creek Street',
      postCode: '4444',
      CityId: 3,
      CountryId: 5,
      UserId: 3,
    }, {
      firstName: 'Mila',
      lastName: 'Zdravkova',
      email: 'milche@mailer.com',
      address: '02 Bees Greeks Street',
      postCode: '5555',
      CityId: 10,
      CountryId: 10,
      UserId: 6,
    }, {
      firstName: 'Dimitry',
      lastName: 'Vlad',
      email: 'vlad@mail.com',
      address: '9051 Studebaker Circle',
      postCode: '6666',
      CityId: 2,
      CountryId: 3,
      UserId: 6,
    }].map((el) => {
      el.updatedAt = new Date;
      el.createdAt = new Date;
      return el;
    }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('BillingInfos', null, {});
  },
};
