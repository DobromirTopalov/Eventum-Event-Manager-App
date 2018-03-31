class CountryData {
    constructor (Model) {
        this.Model = Model;
    }

    getAll() {
        const result = this.Model.findAll({
            attributes: ['name'],
        });

        return result;
    }

    getByName(country) {
        const result = this.Model.findOne({
            where: {
                name: country
            }
        });

        return result;
    }
}

module.exports = CountryData;
