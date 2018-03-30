const eventObject = require('../../../models/data-class/event-class');

class EventController {
    constructor (data) {
        this.data = data;
    }

    getCountries() {
        const reuslt = this.data.country.getAll();

        return reuslt;
    }
    async createEvent(userId, eventData) {
        let thisEvent = null;
        try {
        //    console.log(eventData);
            // console.log('2313')
            // await console.log(eventData.date)
            thisEvent = await new eventObject(eventData.date, '', eventData.country, eventData.city,
            eventData.address, eventData.title, eventData.description, eventData.price, eventData.category);
            
            await this.data.events.addNewEvent(userId, thisEvent);
        }
        catch (err) {
            throw err;
        }
    }
}

module.exports = EventController;
