const {
    Country
} = require('./../../models/database/models');

class CityData {
    constructor (Model) {
        this.Model = Model;
    }

    getAll(country) {
        const result = this.Model.findAll({
            attributes: ['name'],
            include: [
                {
                    model: Country,
                    where: {
                        name: country
                    },
                }
            ],
        });

        return result;
    }
}

module.exports = CityData;
