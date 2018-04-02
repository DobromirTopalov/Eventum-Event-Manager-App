const {
  Router,
} = require('express');

// const {
//     User,
//     Artist,
// } = require('../../../models/data-class');

const SearchController = require('./search.controller');

const init = (app, data) => {
    const router = new Router();
    
    // const userController = new UserController(data);
    let controller = new SearchController(data);
    router
    .get('/', async (req, res) => {
        console.log(req.query)
        let queryData = req.query;
        let eventsAll = await controller.eventQuery(queryData.keywords, queryData.city, '', queryData.category);
        const categories = ['Music', 'Art', 'Sport', 'Dances', 'Technology'];
        const cities = ['London', 'Paris', 'Sofia', 'Varna'];
        const events = {
            ...eventsAll,
        };
        // console.log(events)
        // const events = {
            // data.events.getAllEventsInfo(),
        //     eventCard1: {
        //         title: 'Grande e',
        //         coverPhoto: '/static/images/p3.jpg',
        //         eventInfo: '/views/evnt-23',
        //         authorProfile: '/public/users',
        //         authorImg: '/static/images/p3.jpg',
        //         authorName: 'Big Bill',
        //         categories: [{ name: 'Music' }, { name: 'Rap' }],
        //         description: 'New album release and dinner + afterparty!',
        //         ticketPrice: '$15.00',
        //         followers: 90,
        //         capacity: 200,
        //         date: '11.11.21',
        //     },
        //     eventCard2: {
        //         title: 'Viva las Vegas',
        //         coverPhoto: '/static/images/p3.jpg',
        //         eventInfo: '/views/evnt-23',
        //         authorProfile: '/public/users',
        //         authorImg: '/static/images/p3.jpg',
        //         authorName: 'Don Roberto',
        //         categories: [{ name: 'Art' }, { name: 'grafity' }],
        //         description: 'Gallery',
        //         ticketPrice: '$50.99',
        //         followers: '48',
        //         capacity: 90,
        //         date: '23.01.19',
        //     },
        // };

        const context = {
            categories,
            cities,
            events,
        };

        res.render('./search/search', context);
    })
   

    app.use('/search', router);
};

module.exports = {
  init,
};
