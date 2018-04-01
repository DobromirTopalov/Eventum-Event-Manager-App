// const {
//     UserInfo,
// } = require('../../models/database/models');

class EventData {
    constructor(Model) {
        this.Model = Model;
    }

    getEventInfoById(id) {
        const result = this.Model.findOne({
            where: {
                id: id,
            },
        });

        return result;
    }

    getAllEventsInfo(id) {
        const result = this.Model.findAll();

        return result;
    }

    async addNewEvent(eventObject) {
        const result = this.Model.create({
            title: eventObject.title,
            describe: eventObject.describe,
            capacity: eventObject.capacity,
            // coverPhoto: '',
            date: eventObject.date,
            LocationId: eventObject.locationId.id,
            UserId: eventObject.UserId,
            CategoryId: eventObject.categoryId.id,
            SubcategoryId: eventObject.subcategoryId.id,
        });

        return result;
    }
}

module.exports = EventData;
