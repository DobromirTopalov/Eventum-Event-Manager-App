class SearchController {
    constructor(data) {
        this.data = data;
    }

    async eventQuery(keywordsQ = '',
        cityQ = '', countryQ = '', categoryQ = '') {
        const allEvents = await this.data
            .events.getEventInfoByQuery(keywordsQ, cityQ, countryQ, categoryQ);

        const result = allEvents.map((event) => {
            return {
                title: event.title,
                eventId: event.id,
                username: event.User.username,
                coverPhoto: '/static/uploads/' + event.coverPhoto,
                city: event.Location.City.name,
                authorImg: '/static/uploads/' + event.User.UserInfo.avatar,
                categories: [{ name: event.Category.name }],
                description: event.describe,
                capacity: event.capacity,
                date: event.date.getDate() + '.' +
                    ('0' + String((event.date.getMonth() + 1)))
                    .slice(-2) + '.' + event.date.getFullYear() +'  '
                    + event.date.getHours() + ':' + event.date.getMinutes(),
            };
        });

        return result;
    }
    async userQuery(keywordsQ = '', typeQ = '') {
        const allUsers = await this.data
            .users.getUsersByQuery(keywordsQ, typeQ);

        const result = allUsers.map((user) => {
            return {
                username: user.username,
                name: user.name,
                avatar: '/static/uploads/' + user.UserInfo.avatar,
                biography: user.UserInfo.biography,
                role: user.role,
            };
        });

        return result;
    }


    async getAllCities() {
        const result = await this.data.city.getAll();

        return result;
    }

    async getAllCategories() {
        const result = await this.data.categories.getAllCategories();

        return result;
    }

    async getAllCountries() {
        const result = await this.data.country.getAll();

        return result;
    }
}

module.exports = SearchController;
