'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Locations', [{
            name: 'Wembley Stadium',
            address: 'London HA9 0WS, UK',
            CityId: 1,
        },
        {
            name: 'Mercedes-Benz Arena',
            address: 'Mercedes-Platz 1, 10243 Berlin, Germany',
            CityId: 2,
        },
        {
            name: 'Big Ben',
            address: 'Westminster, London, England, UK',
            CityId: 3,
        },
        ]
            .map((el) => {
                el.updatedAt = new Date;
                el.createdAt = new Date;
                return el;
            }), {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Locations', null, {});
    },
};
