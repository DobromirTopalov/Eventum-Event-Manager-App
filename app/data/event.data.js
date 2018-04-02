const {
    UserInfo,
    User,
    Location,
    City,
    Country,
    Subcategory,
    Category,
} = require('../../models/database/models');
class EventData {
    constructor(Model) {
        this.Model = Model;
    }

    findById(id) {
        const result = this.Model.findOne({
            where: {
                id: id,
            },
        });
        return result;
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

    getEventInfoByQuery(keywords, city, country, category) {
        let keywordsQuery = keywords.split(' ');
        keywordsQuery = keywordsQuery.map(function (item) {
            return {
                $like: '%' + item + '%',
            };
        });
        // let cityQuery = city.split(' ');
        const cityQuery = city.split(' ').map(function (item) {
            return {
                $like: '%' + item + '%',
            };
        });
        const countryQuery = country.split(' ').map(function (item) {
            return {
                $like: '%' + item + '%',
            };
        });
        const categoryQuery = category.split(' ').map( (item) => {
            return {
                $like: '%' + item + '%',
            };
        });

        const result = this.Model.findAll({
            where: {
                describe: { $or: keywordsQuery }
            },
            required: true,
            include: [
                {
                    model: Location,
                    include: [
                        {
                            model: City,
                            where: {
                                name: { $or: cityQuery },
                            },
                            required: true,
                            include: {
                                model: Country,
                                where: {
                                    name: { $or: countryQuery },
                                },
                                required: true,
                            },
                        },
                    ],
                    required: true,
                },
                {
                    model: User,
                    include: {
                        model: UserInfo,
                    },
                },
                {
                    model: Category,
                    where: {
                        name: { $or: categoryQuery },
                    },
                    required: true,
                },
                {
                    model: Subcategory,
                },
            ],
        });
        return result;
    }
    getAllEventsInfo() {
        const result = this.Model.findAll({
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

    addNewEvent(eventObject) {
        const result = this.Model.create({
            title: eventObject.title,
            describe: eventObject.describe,
            capacity: eventObject.capacity,
            date: eventObject.date,
            LocationId: eventObject.locationId.id,
            UserId: eventObject.userId,
            CategoryId: eventObject.categoryId.id,
            SubcategoryId: eventObject.subcategoryId.id,
            coverPhoto: eventObject.coverPhoto,
        });

        return result;
    }
    async addEventCoverPic(id, coverImg) {
        const result = this.Model.update({
            coverPhoto: coverImg,
        },
            { where: { id: id } }
        );

        return result;
    }
    async deleteEventById(id) {
        const result = this.Model.destroy({
            where: { id: id },
        });
        return result;
    }
}

module.exports = EventData;
