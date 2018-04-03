class ProfileController {
    constructor(data) {
        this.data = data;
    }

    async getAllEventsByArtist(id) {
        const result = await this.data.events.getAllEventsByUser(id);

        return result;
    }

    async getAllEventsByUser(id) {
        const result = await this.data.purches.getAllByUser(id);

        return result;
    }

    buildEventObject(allEvents) {
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

    async getAllEventsByArtistFull(id) {
        const allEvents = await this.data.events.getAllEventsByUserFull(id);
        const result = this.buildEventObject(allEvents);

        return result;
    }

    async getAllEventsByUserFull(id) {
        let allEvents = await this.data.purches.getAllByUserFullEvent(id);
        allEvents = allEvents.map((event) => {
            return event.Event;
        });

        const result = this.buildEventObject(allEvents);

        return result;
    }
}

module.exports = ProfileController;
