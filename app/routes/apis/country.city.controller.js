class CountryCityController {
    constructor (data) {
        this.data = data;
    }

    getAllCities(country) {
        const result = this.data.city.getAll(country);

        return result;
    }

    getAllCountries() {
        const result = this.data.country.getAll();
        
        return result;
    }
}

module.exports = CountryCityController;