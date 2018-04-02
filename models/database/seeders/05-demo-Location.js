'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Locations', [{
            name: 'Armeec dance arena',
            address: `Bul. 'Asen Iordanov' 1`,
            CityId: 1,
        }, {
            name: 'Nantes Platzie of Libertarie',
            address: 'Nantezimo 105, 10243 de France',
            CityId: 4,
        }, {
            name: 'Varna Summer-AquaBeach',
            address: `Bul. 'Chaika Glarus' 10`,
            CityId: 2,
        }, {
            name: 'Mall de France',
            address: `St. 'COUESNES VAUCE' 33`,
            CityId: 4,
        }, {
            name: 'Big Ben',
            address: 'Westminster 81 London, England',
            CityId: 7,
        }, {
            name: `'Bea' - The Spacegravity House`,
            address: 'Mercedes-Platz 1, 10243 Munich, Germany',
            CityId: 6,
        }].map((el) => {
                el.updatedAt = new Date;
                el.createdAt = new Date;
                return el;
            }), {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Locations', null, {});
    },
};
