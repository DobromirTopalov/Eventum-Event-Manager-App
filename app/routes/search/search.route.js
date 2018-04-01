const {
  Router,
} = require('express');

const {
    User,
    Artist,
} = require('../../../models/data-class');

// const UserController = require('./search.controller');

const init = (app, data) => {
    const router = new Router();
    // const userController = new UserController(data);

    router
    .get('/', async (req, res) => {
        // await console.log(await data.events.getAllEventsInfo());
        const allEvents = await data.events.getAllEventsInfo();
        const categories = ['Music', 'Art', 'Sport', 'Dances', 'Technology'];
        const cities = ['London', 'Paris', 'Sofia', 'Varna'];
        await console.log(allEvents[0].dataValues);
        await console.log(allEvents[0].dataValues.User)
        // allEvents = allEvents.map(event => Object.assign(event, event.dataValues.User.User, {categories: [{ name: 'Music' }, { name: 'Rap' }]}  ));
        const events = {
            ...allEvents,
        }
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
        //         description: 'Gallery with all my stuff as well as friends articles',
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

        if (req.body.keywords || req.body.category || req.body.city) {
            context.category = req.body.category;
            context.city = req.body.city;
            context.keywords = req.body.keywords;

            res.redirect(`./search/?keywords=${context.keywords}&${context.category}&${context.city}`);
        }

        res.render('./search/search', context);
    })
    .post('/', async (req, res, next) => {
        const searchWordsAndCriteries = req.body;
        try {
            // search in DB regex that matches the word via event title
            // using some logic or regex to compare
            // await userController.createUser(userData);
        } catch (err) {
            res.status(400).json( { 'err': err.message });
        }
        res.status(200).json({ 'success': true });
    });

    app.use('/search', router);
};

module.exports = {
  init,
};