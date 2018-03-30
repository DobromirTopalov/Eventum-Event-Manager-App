class EventController {
    constructor (data) {
        this.data = data;
    }

    getCountries() {
        const reuslt = this.data.country.getAll();

        return reuslt;
    };
}

module.exports = EventController;
