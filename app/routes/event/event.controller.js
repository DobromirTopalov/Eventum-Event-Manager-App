const EventObject = require('../../../models/data-class/event-class');

class EventController {
    constructor(data) {
        this.data = data;
    }

    getCountries() {
        const result = this.data.country.getAll();

        return result;
    }

    getCategories() {
        const result = this.data.categories.getAllCategories();

        return result;
    }

    async createEvent(userId, eventData) {
        try {
            const thisEvent = new EventObject(eventData.date, '',
                eventData.placeName, eventData.country, eventData.city,
                eventData.address, eventData.title, eventData.description,
                eventData.category, eventData.subcategory, eventData.price,
                eventData.capacity, eventData.time);

            const eventSeqObject = {
                title: thisEvent.getTitle(),
                describe: thisEvent.getDescription(),
                capacity: thisEvent.getCapacity(),
                date: thisEvent.getDate(),
                userId: userId,
            };

            const ticketSeqObject = {
                price: thisEvent.getPrice(),
                capacity: thisEvent.getCapacity(),
            };

            const country = await this.data
                .country.getByName(eventData.country);
            if (!country) {
                throw new Error('Please choose a country');
            }

            const city = await this.data
                .city.getByName(eventData.city);
            if (!city) {
                throw new Error('Please choose a city');
            }

            const category = await this.data
                .categories.getByName(eventData.category);
            if (!category) {
                throw new Error('Please select a category');
            }

            const subcategory = await this.data
                .subcategories.getByName(eventData.subcategory);
            if (!subcategory) {
                throw new Error('Please select a subcategory');
            }

            const location = await this.data.location.createLocation({
                name: thisEvent.getLocationName(),
                address: thisEvent.getAddress(),
                cityId: city,
            });

            eventSeqObject.categoryId = category;
            eventSeqObject.subcategoryId = subcategory;
            eventSeqObject.locationId = location;
            eventSeqObject.coverPhoto = eventData.coverPhoto;

            const newEvent = await this.data.events.addNewEvent(eventSeqObject);
            await this.data.tickets.addNewTicket(ticketSeqObject, newEvent.id);

            return true;
        } catch (err) {
            throw err;
        }
    }

    async addEventCoverPic(id, coverPhoto) {
        try {
            await this.data.events.addEventCoverPic(id, coverPhoto);
        } catch (err) {
            throw err;
        }
    }

    async deleteEvent(id) {
        try {
            await this.data.events.deleteEventById(id);
        } catch (err) {
            throw err;
        }
    }
}

module.exports = EventController;
