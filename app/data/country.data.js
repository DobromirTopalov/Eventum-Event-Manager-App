class CountryData {
    constructor (Model) {
        this.Model = Model;
    }

    getAll() {
        const result = this.Model.findAll({
            attributes: ['Name'],
        });

        return result;
    }
}

module.exports = CountryData;
