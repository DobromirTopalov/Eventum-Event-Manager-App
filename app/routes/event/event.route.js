const {
    Router,
} = require('express');

const EventController = require('./event.controller');

const init = (app, data) => {
    const router = new Router();
    const eventController = new EventController(data);

    router
        .get('/:ID/:TITLE', async (req, res) => {
            const context = {};
            res.render('./event/eventPage', context);
        })
        .get('/create', async (req, res, next) => {
            const context = {};
            context.countries =['Bulgaria'];
            //  await eventController.getCountries();
    
            // console.log(context);
            // res.status(200).json(context);
            res.render('./event/create', context);
        })
        .post('/create', async (req, res, next) => {
            let eventInfo = await req.body;
            console.log(23)
            // await console.log(eventInfo);
            try {
                 await eventController.createEvent(eventInfo);
             } catch (err) {
                 const someError = err;
                 res.status(400).json({ 'err': err.message });
             }
             res.status(200).json({ 'success': true });
         });
        //  .get('/overview', async (req, res, next) => {
        //     const context = {};
        //     context.countries =['Bulgaria'];
        //     const event = {
        //     title: 'Soundwave - experience the best audio!',
        //     date: 'November, 27 2018',
        //     location: 'NDK',
        //     city: 'Sofia',
        //     country: 'Bulgaria',
        //     authorPhoto: 'photo.com',
        //     description: 'Ultra new, bleeding edge sound equipment and a lot of music, drink and fun!',
        //     socialFb: 'asd.bg',
        //     socialTwt: 'asd.com',
        //     socialGgl: 'asd.net',
        //     price: '15.99',
        //     capacity: '120',
        //     placename: 'Sofia Live Club',
        //     category: 'Music',
        //     subcategories: ['Modern', 'Techno', 'Trap'],
        //     hours: '21:30',

        //         //     };
        
        //     res.render('./event/create', context);
        // })
        // // .get('/overview', async (req, res) => {
        // //     const event = {
        // //         title: 'Soundwave - experience the best audio!',
        //         date: 'November, 27 2018',
        //         location: 'NDK',
        //         city: 'Sofia',
        //         country: 'Bulgaria',
        //         authorPhoto: 'photo.com',
        //         description: 'Ultra new, bleeding edge sound equipment and a lot of music, drink and fun!',
        //         socialFb: 'asd.bg',
        //         socialTwt: 'asd.com',
        //         socialGgl: 'asd.net',
        //         price: '15.99',
        //         capacity: '120',
        //         placename: 'Sofia Live Club',
        //         category: 'Music',
        //         subcategories: ['Modern', 'Techno', 'Trap'],
        //         hours: '21:30',

        //     };

        //     const comments = [{
        //             img: 'photo.com',
        //             owner: 'Ivan Ivanov',
        //             date: '23.12.16 23:45',
        //             content: 'Fantastic show!',
        //         },
        //         {
        //             img: 'photos.com',
        //             owner: 'Mitko Mitev',
        //             date: '02.08.16 02:45',
        //             content: 'Awesome!',
        //         },
        //     ];

        //     const context = {
        //         event,
        //         comments,
        //     };
        //     res.render('./event/event-overview', context);
        // });

    app.use('/event', router);
};

module.exports = {
    init,
};
