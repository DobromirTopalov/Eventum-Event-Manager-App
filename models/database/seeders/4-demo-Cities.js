'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Cities', [{
            name: 'London',
        },
        {
            name: 'Berlin',
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
