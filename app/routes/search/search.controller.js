
class SearchController {
    constructor(data) {
        this.data = data;
    }

    async eventQuery(keywordsQ = '', cityQ = '', countryQ = '', categoryQ = '') {
        const allEvents = await this.data.events.getEventInfoByQuery(keywordsQ, cityQ, countryQ, categoryQ);

        return allEvents.map((event) => {
            return event.toJSON();
        }).map((event) => {
            console.log(event);
            return {
                
                title: event.title,
                coverPhoto: '/static/uploads/' + event.coverPhoto,
                city: event.Location.City.name,
                // eventInfo: '/views/evnt-23',
                // authorProfile: '/public/users',
                authorImg: '/static/uploads/' + event.User.UserInfo.avatar,
                // authorName: event.User.username,
                // authorName: 'Peter',
                // subcategories: [{ name: event.Category.name }],
                categories: [{ name: event.Category.name }],
                description: event.describe,
                ticketPrice: '$15.00',
                followers: 90,
                capacity: event.capacity,
                date:  event.date.getDate() + '.' + 
                ('0' + String((event.date.getMonth()+1))).slice(-2) + '.'+ event.date.getFullYear() + 
                '  ' +event.date.getHours() + ':' + event.date.getMinutes(),
            };
        });

    }

}

module.exports = SearchController;
