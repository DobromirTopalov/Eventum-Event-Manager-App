const eventObject = require('../../../models/data-class/event-class');

class EventController {
    constructor(data) {
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

    async createEvent(userId, eventData) {
        try {
            const thisEvent = new eventObject(eventData.date, '', eventData.placeName, eventData.country, eventData.city,
                eventData.address, eventData.title, eventData.description, eventData.category, eventData.subcategory, eventData.price, eventData.capacity);

            const eventSeqObject = {
                title: thisEvent.getTitle(),
                describe: thisEvent.getDescription(),
                capacity: thisEvent.getCapacity(),
                coverPhoto: '',
                date: thisEvent.getDate(),
                UserId: userId,
            }

            const country = await this.data.country.getByName(eventData.country);
            if (!country) {
                throw new Error('The country is not correct');
            }

            const city = await this.data.city.getByName(eventData.city);
            if (!city) {
                throw new Error('The city is not correct');
            }

            const category = await this.data.categories.getByName(eventData.category);
            if (!category) {
                throw new Error('The category is not correct');
            }

            const subcategory = await this.data.subcategories.getByName(eventData.subcategory);
            if (!subcategory) {
                throw new Error('The subcategory is not correct');
            }

            const location = await this.data.location.createLocation({
                name: thisEvent.getLocationName(),
                address: thisEvent.getAddress(),
                cityId: city,
            });

            eventSeqObject.categoryId = category;         
            eventSeqObject.subcategoryId = subcategory;
            eventSeqObject.locationId = location;

            await this.data.events.addNewEvent(eventSeqObject);
        }
        catch (err) {
            throw err;
        }
    }

}

module.exports = EventController;
