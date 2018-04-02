'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Countries', [{
        name: 'Bulgaria',
      }, {
        name: 'France',
      }, {
        name: 'Germany',
      }, {
        name: 'England',
      }, {
        name: 'Austria',
      }, {
        name: 'Belgium',
      }, {
        name: 'Croatia',
      }, {
        name: 'Czech Republic',
      }, {
        name: 'Denmark',
      }, {
        name: 'Finland',
      }, {
        name: 'Greece',
      }, {
        name: 'Hungary',
      }, {
        name: 'Ireland',
      }, {
        name: 'Italy',
      }, {
        name: 'Lithuania',
      }, {
        name: 'Luxembourg',
      }, {
        name: 'Malta',
      }, {
        name: 'Netherlands',
      }, {
        name: 'Poland',
      }, {
        name: 'Portugal',
      }, {
        name: 'Romania',
      }, {
        name: 'Slovakia',
      }, {
        name: 'Slovenia',
      }, {
        name: 'Spain',
      }, {
        name: 'Sweden',
      }, {
        name: 'UK',
      }, {
        name: 'USA',
      }, {
        name: 'Russia',
      }, {
        name: 'Mexico',
      }, {
        name: 'Canada',
      }, {
        name: 'Australia',
      }, {
        name: 'China',
      }, {
        name: 'India',
      }, {
        name: 'Korea',
      }, {
        name: 'Japan',
      }, {
        name: 'Turkey',
      }, {
        name: 'Ukraine',
      }].map( (el) => {
        el.updatedAt = new Date;
        el.createdAt = new Date;
        return el;
      }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Countries', null, {});
  },
};
