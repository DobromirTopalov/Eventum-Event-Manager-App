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
<<<<<<< HEAD
            const thisEvent = await new eventObject(eventData.date, '', eventData.country, eventData.city,
                eventData.address, eventData.title, eventData.description, eventData.price, eventData.category);

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

            const subcategory = await this.data.subcategory.getByName(eventData.subcategory);
            if (!subcategory) {
                throw new Error('The subcategory is not correct');
            }

=======
            //    console.log(eventData);
            // console.log('2313')
            // await console.log(eventData.date)
            thisEvent = await new eventObject(eventData.date, '', eventData.country, eventData.city,
                eventData.address, eventData.title, eventData.description, eventData.category, eventData.price, eventData.capacity);
            console.log(thisEvent)
>>>>>>> 49740419be52815014ec8d4b6288b5a44169278b
            await this.data.events.addNewEvent(userId, thisEvent);
        }
        catch (err) {
            throw err;
        }
    }

}

module.exports = EventController;
