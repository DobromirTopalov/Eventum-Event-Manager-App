class EventController {
    constructor (data) {
        this.data = data;
    }

    getCountries() {
        const result = this.data.country.getAll();

        return result;
    };

    getCategories() {
        const result = this.data.categories.getAllCategories();

        return result;
    }
}

module.exports = EventController;
