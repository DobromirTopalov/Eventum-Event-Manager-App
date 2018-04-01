<<<<<<< HEAD
const {
    UserInfo,
    User,
    Location,
    City,
    Country,
    Subcategory,
    Category,
} = require('../../models/database/models');
=======
// const {
//     UserInfo,
// } = require('../../models/database/models');
>>>>>>> b0ec09d6e4d689ea76989ca68adf12a64c9941ae

class EventData {
    constructor(Model) {
        this.Model = Model;
    }

    getEventInfoById(id) {
        const result = this.Model.findOne({
            where: {
                id: id,
            },
            include: [
                {
                    model: Location,
                    include: [
                        {
                            model: City,
                            include: {
                                model: Country,
                            },
                        },
                    ],
                },
                {
                    model: User,
                    include: {
                        model: UserInfo,
                    },
                },
                {
                    model: Category,
                },
                {
                    model: Subcategory,
                },
            ],
        });

        return result;
    }

    getAllEventsInfo() {
        const result = this.Model.findAll();

        return result;
    }

    addNewEvent(eventObject) {
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
