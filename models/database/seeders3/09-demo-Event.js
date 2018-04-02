'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Events', [{
        title: 'Dance under the sky',
        describe: 'Dance and party all night',
        capacity: 100,
        coverPhoto: 'https://www.blacktomato.com/wp-content/uploads/2015/05/Pehoe-mountain-lake-and-Los-Cuernos-The-Horns-National-Park-Torres-del-Paine-Chile_167957318.jpg',
        date: '23.03.19',
        LocationId: 1,
        UserId: 2,
        CategoryId: 1,
        SubcategoryId: 2,
      }, {
        title: 'Dinner and sound',
        describe: 'Eat and enjoy classic music',
        capacity: 200,
        coverPhoto: 'http://www.operationworld.org/files/ow/maps/lgmap/chil-MMAP-md.png',
        date: '03.07.19',
        LocationId: 2,
        UserId: 1,
        CategoryId: 1,
        SubcategoryId: 2,
      }, {
        title: 'Sport with celebrities',
        describe: 'Ride bike, do muscle-ups, run, whatever you like',
        capacity: 80,
        coverPhoto: 'https://www.pmi.com/resources/images/default-source/country-shapes/chile---shape.png?sfvrsn=c2e588b5_0',
        date: '13.11.18',
        LocationId: 3,
        UserId: 1,
        CategoryId: 4,
        SubcategoryId: 7,
      }, {
        title: 'Rock \'n roll',
        describe: 'Drink beer with friends and chill',
        capacity: 40,
        coverPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7YSkiRoSRxfOiB_9-deEwYrtE0Dtrbc05aL-nYqe9f-QucKDB',
        date: '23.09.18',
        LocationId: 1,
        UserId: 2,
        CategoryId: 2,
        SubcategoryId: 3,
      }].map( (el) => {
        el.updatedAt = new Date;
        el.createdAt = new Date;
        return el;
      }), {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Events', null, {});
  },
};
