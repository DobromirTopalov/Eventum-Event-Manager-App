'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Cities', [{
            name: 'Sofia',
            CountryId: 1,
        },
        {
            name: 'Berlin',
            CountryId: 3,
        },
        {
            name: 'Moscow',
            CountryId: 5,
        },
        ]
            .map((el) => {
                el.updatedAt = new Date;
                el.createdAt = new Date;
                return el;
            }), {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Cities', null, {});
    },
};
