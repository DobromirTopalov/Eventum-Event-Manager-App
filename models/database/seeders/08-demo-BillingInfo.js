'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('BillingInfos', [{
      firstName: 'Mike',
      lastName: 'Lebron',
      email: 'mikeLebron@gmail.com',
      address: '52 Sunnyslope Street',
      postCode: '1242',
      CityId: 1,
      CountryId: 1,
    }, {
      firstName: 'Mira',
      lastName: 'Vasileva',
      email: 'mira@mail.com',
      address: '75 Lees Creek Street',
      postCode: '3542',
      CityId: 2,
      CountryId: 3,
    }, {
      firstName: 'Nasko',
      lastName: 'Mitev',
      email: 'mitew@mail.com',
      address: '48 Pawnee Lane',
      postCode: '8741',
      CityId: 2,
      CountryId: 3,
    }, {
      firstName: 'Mirela',
      lastName: 'Gogova',
      email: 'mirela_g@mailbox.bg',
      address: '75 Lees Creek Street',
      postCode: '7841',
      CityId: 3,
      CountryId: 5,
    }, {
      firstName: 'Mila',
      lastName: 'Zdravkova',
      email: 'milche_78@mailer.com',
      address: '02 Bees Greeks Street',
      postCode: '3775',
      CityId: 1,
      CountryId: 1,
    }, {
      firstName: 'Dimitry',
      lastName: 'Vlad',
      email: 'vladD@mail.com',
      address: '9051 Studebaker Circle',
      postCode: '3570',
      CityId: 2,
      CountryId: 3,
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
