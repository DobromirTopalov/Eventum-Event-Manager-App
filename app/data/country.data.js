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
}

module.exports = CountryData;
